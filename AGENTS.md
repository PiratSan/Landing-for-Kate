# Project working instructions

## Build and deployment

- Build and rebuild production artifacts on the user's local computer, not on the VPS.
- Treat the VPS as a low-resource runtime host: transfer a ready artifact or container image that matches the server architecture, then restart the services without building there.
- Do not run application or container builds on the VPS unless the user explicitly requests an exception.
- Verify the VPS CPU architecture before selecting the local Docker build platform.
- Do not modify `Dockerfile`, `compose.yml`, `Caddyfile`, or other server configuration unless the user explicitly authorizes that specific change.
- Keep approved source changes committed and pushed to GitHub.
