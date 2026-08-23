param(
  [string]$Server = '83.166.247.193',
  [string]$KeyPath = "$env:USERPROFILE\.ssh\id_ed25519_landing_vps"
)

$ErrorActionPreference = 'Stop'

$branch = (git branch --show-current).Trim()
if ($branch -ne 'main') {
  throw "Deployment must run from main; current branch is $branch."
}

if (git status --porcelain) {
  throw 'Commit all changes before deployment.'
}

$serverArchitecture = (& ssh -i $KeyPath "root@$Server" 'uname -m').Trim()
if ($serverArchitecture -ne 'x86_64') {
  throw "Expected x86_64 VPS, received $serverArchitecture."
}

$commit = (git rev-parse --short=12 HEAD).Trim()
$versionedImage = "landing-for-kate-site:$commit"
$latestImage = 'landing-for-kate-site:latest'
$archive = Join-Path $env:TEMP "landing-for-kate-site-$commit.tar"
$remoteArchive = "/var/tmp/landing-for-kate-site-$commit.tar"

try {
  docker build --platform linux/amd64 --tag $versionedImage --tag $latestImage .
  if ($LASTEXITCODE -ne 0) { throw 'Docker build failed.' }

  docker save --output $archive $versionedImage $latestImage
  if ($LASTEXITCODE -ne 0) { throw 'Docker image export failed.' }

  git push origin main
  if ($LASTEXITCODE -ne 0) { throw 'GitHub push failed.' }

  scp -i $KeyPath $archive "root@${Server}:$remoteArchive"
  if ($LASTEXITCODE -ne 0) { throw 'Image transfer failed.' }

  $remoteCommand = "set -e; runuser -u landing -- git -C /var/www/landing/Landing-for-Kate pull --ff-only; docker load --input $remoteArchive; rm -f $remoteArchive; cd /var/www/landing/Landing-for-Kate; docker compose up -d --no-build --pull never"
  ssh -i $KeyPath "root@$Server" $remoteCommand
  if ($LASTEXITCODE -ne 0) { throw 'VPS deployment failed.' }
}
finally {
  if (Test-Path -LiteralPath $archive) {
    Remove-Item -LiteralPath $archive -Force
  }
}

Write-Host "Deployed $versionedImage to $Server"
