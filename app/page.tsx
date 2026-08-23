const services = [
  {
    number: '01',
    title: 'Запуск рекламы с нуля',
    text: 'Изучаю продукт и аудиторию, собираю стратегию, готовлю креативы и запускаю первые гипотезы.',
    tags: ['Стратегия', 'Креативы', 'Запуск'],
  },
  {
    number: '02',
    title: 'Ведение и оптимизация',
    text: 'Слежу за рекламой каждый день, отключаю лишнее и перенаправляю бюджет туда, где есть результат.',
    tags: ['Аналитика', 'A/B-тесты', 'Отчёт'],
  },
  {
    number: '03',
    title: 'Аудит рекламного кабинета',
    text: 'Нахожу точки потери бюджета и даю конкретный план: что исправить сейчас, а что тестировать дальше.',
    tags: ['Диагностика', 'Рекомендации', 'План'],
  },
];

const steps = [
  ['Знакомимся', 'Обсуждаем продукт, цели, аудиторию и то, что уже пробовали.'],
  ['Собираем систему', 'Формулирую гипотезы, выстраиваю аналитику и готовлю запуск.'],
  ['Улучшаем', 'Смотрю на цифры, масштабирую рабочее и объясняю каждый следующий шаг.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Екатерина — на главную">ЕК<span>/</span></a>
        <nav className="main-nav" aria-label="Основная навигация">
          <a href="#services">Услуги</a><a href="#process">Подход</a><a href="#contact">Контакты</a>
        </nav>
        <a className="header-cta" href="#contact">Обсудить проект <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Таргетолог для малого бизнеса</p>
          <h1>Реклама, которая<span className="accent-line">ведёт к заявкам<span className="spark">✦</span></span></h1>
          <p className="hero-text">Я Екатерина. Помогаю бизнесу находить своих людей в соцсетях — от первой гипотезы до понятной системы привлечения клиентов.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Начать с консультации <span aria-hidden="true">→</span></a>
            <a className="text-link" href="#services">Посмотреть услуги</a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Принципы работы">
          <div className="card-orbit" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit-dot" /><span className="orbit-mark">ЕК</span></div>
          <div className="card-caption"><p>Стратегия <span>•</span> Аналитика <span>•</span> Креатив</p><strong>Точно в цель,<br />без лишнего шума.</strong></div>
        </aside>
        <div className="hero-footnote"><span>01</span><p>Вникаю в продукт<br />и говорю на языке цифр</p></div>
      </section>

      <div className="marquee" aria-label="Основные направления">
        <div>Анализ аудитории <span>✦</span> Рекламные кампании <span>✦</span> Креативы <span>✦</span> Оптимизация бюджета <span>✦</span></div>
      </div>

      <section className="services section" id="services">
        <div className="section-heading">
          <p className="section-label">Что я делаю</p>
          <h2>Не просто настраиваю.<br /><em>Выстраиваю путь</em> к клиенту.</h2>
          <p>Работаю точечно или беру рекламу под ключ — в зависимости от задачи и этапа бизнеса.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <div className="service-detail">
                <p>{service.text}</p>
                <div className="tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="process section" id="process">
        <div className="process-intro">
          <p className="section-label light">Мой подход</p>
          <h2>Чутьё — хорошо.<br /><span>Данные — лучше.</span></h2>
          <p>За каждым решением стоит гипотеза, а за каждой гипотезой — цифры. Поэтому вы всегда понимаете, куда уходит бюджет и что он приносит.</p>
        </div>
        <div className="data-card" aria-label="Схема роста рекламных показателей">
          <div className="data-top"><span>Динамика кампании</span><strong>+38%</strong></div>
          <div className="chart" aria-hidden="true">
            <i style={{height:'24%'}} /><i style={{height:'36%'}} /><i style={{height:'32%'}} /><i style={{height:'52%'}} /><i style={{height:'48%'}} /><i style={{height:'68%'}} /><i style={{height:'83%'}} />
          </div>
          <div className="data-bottom"><span>Тест</span><span>Анализ</span><span>Рост</span></div>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <article className="step" key={step[0]}><span>0{index + 1}</span><div><h3>{step[0]}</h3><p>{step[1]}</p></div></article>
          ))}
        </div>
      </section>

      <section className="principles section" aria-labelledby="principles-title">
        <div>
          <p className="section-label">В работе</p>
          <h2 id="principles-title">Прозрачно.<br />Спокойно.<br /><span>По делу.</span></h2>
        </div>
        <div className="principle-grid">
          <article><strong>3</strong><p>уровня анализа:<br />аудитория, креатив, воронка</p></article>
          <article><strong>1</strong><p>понятный отчёт<br />без сложных таблиц</p></article>
          <article><strong>0</strong><p>решений наугад<br />и туманных обещаний</p></article>
        </div>
      </section>

      <section className="fit section">
        <div className="fit-heading"><p className="section-label light">Мы сработаемся, если</p><h2>Вам нужен не «трафик»,<br />а <span>понятный результат.</span></h2></div>
        <ul>
          <li><span>01</span>Вы готовы тестировать гипотезы, а не ждать волшебную кнопку</li>
          <li><span>02</span>Цените честный диалог и хотите понимать логику решений</li>
          <li><span>03</span>Ищете специалиста, который погрузится в продукт</li>
        </ul>
      </section>

      <section className="faq section" aria-labelledby="faq-title">
        <p className="section-label">Коротко о важном</p>
        <div className="faq-layout">
          <h2 id="faq-title">Вопросы<br />до старта</h2>
          <div className="faq-list">
            <details><summary>С каким бюджетом можно начинать?<span>+</span></summary><p>Бюджет зависит от ниши, географии и цели. На первой встрече оценим задачу и определим реалистичный объём теста.</p></details>
            <details><summary>Когда ждать первые результаты?<span>+</span></summary><p>Первые данные появляются сразу после запуска, но для выводов нужен тестовый период. Я заранее обозначу контрольные точки и критерии оценки.</p></details>
            <details><summary>Что понадобится от меня?<span>+</span></summary><p>Информация о продукте, доступы к рекламным площадкам и время на короткое интервью. Остальной процесс беру на себя.</p></details>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-star" aria-hidden="true">✦</div>
        <p className="section-label">Начнём?</p>
        <h2>Расскажите о задаче.<br /><span>Я предложу следующий шаг.</span></h2>
        <p className="contact-text">Коротко опишите проект и цель — обсудим, чем я могу быть полезна и какой формат подойдёт лучше.</p>
        <a className="contact-button" href="mailto:?subject=Заявка%20с%20сайта%20Екатерины">Написать Екатерине <span aria-hidden="true">↗</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">ЕК<span>/</span></a>
        <p>Таргетированная реклама<br />для бизнеса</p>
        <a href="#top">Наверх ↑</a>
      </footer>
    </main>
  );
}
