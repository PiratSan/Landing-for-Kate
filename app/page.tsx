import { FaArrowRight, FaPhoneAlt, FaTelegramPlane, FaVk } from 'react-icons/fa';

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

const cases = [
  {
    number: '01',
    title: 'Интернет-магазин мебели',
    result: '417',
    unit: 'заявок',
    price: '352 ₽',
    priceLabel: 'Стоимость одной заявки',
  },
  {
    number: '02',
    title: 'Офлайн-магазин мягкой мебели',
    result: '81',
    unit: 'заявка',
    price: '550 ₽',
    priceLabel: 'Стоимость одной заявки',
  },
  {
    number: '03',
    title: 'Корпусная мебель на заказ',
    result: '70',
    unit: 'заявок',
    price: '1 030 ₽',
    priceLabel: 'Стоимость одной заявки',
    detail: 'Клиенты общались с менеджером и делали расчёт — не просто заходили в бот.',
  },
  {
    number: '04',
    title: 'Онлайн-школа для педагогов',
    result: '712',
    unit: 'регистраций',
    price: '298 ₽',
    priceLabel: 'Стоимость одной регистрации',
    detail: 'Регистрация с контактными данными: телефон и email.',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Екатерина — на главную">
          <span className="brand-name">Екатерина</span>
          <span className="brand-role">таргетолог</span>
        </a>
        <nav className="main-nav" aria-label="Основная навигация">
          <a href="#services">Услуги</a><a href="#reviews">Отзывы</a><a href="#contact">Контакты</a>
        </nav>
        <a className="header-cta" href="https://vk.me/target_vk63" target="_blank" rel="noreferrer">
          <FaVk aria-hidden="true" /> Обсудить проект
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Таргетолог для бизнеса</p>
          <h1>Реклама, которая<span className="accent-line">ведёт к заявкам<span className="spark">✦</span></span></h1>
          <p className="hero-text">Я Екатерина. Помогаю бизнесу находить своих людей в соцсетях — от первой гипотезы до понятной системы привлечения клиентов.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Начать с консультации <span aria-hidden="true">→</span></a>
            <a className="text-link" href="#services">Посмотреть услуги</a>
          </div>
        </div>
        <aside className="hero-card portrait-card" aria-label="Екатерина — таргетолог, на связи">
          <div className="portrait-frame" role="img" aria-label="Портрет Екатерины" />
          <div className="portrait-status"><span /> На связи</div>
          <div className="card-caption portrait-caption">
            <p className="portrait-kicker">Таргетолог для бизнеса</p>
            <strong>Екатерина</strong>
            <span className="portrait-micro">Стратегия <i aria-hidden="true">✦</i> Аналитика <i aria-hidden="true">✦</i> Креатив</span>
          </div>
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

      <section className="reviews section" id="reviews">
        <div className="reviews-intro">
          <p className="section-label light">Отзывы и результаты</p>
          <h2>Цифры, которые<br /><span>говорят за работу.</span></h2>
          <p>Немного результатов за последний месяц. Все четыре проекта продолжают работать и развиваться.</p>
        </div>
        <div className="data-card" aria-label="Схема роста рекламных показателей">
          <div className="data-top"><span>Динамика кампании</span><strong>4 проекта</strong></div>
          <div className="chart" aria-hidden="true">
            <i style={{height:'24%'}} /><i style={{height:'36%'}} /><i style={{height:'32%'}} /><i style={{height:'52%'}} /><i style={{height:'48%'}} /><i style={{height:'68%'}} /><i style={{height:'83%'}} />
          </div>
          <div className="data-bottom"><span>Тест</span><span>Анализ</span><span>Рост</span></div>
        </div>
        <div className="case-grid">
          {cases.map((item) => (
            <article className="case-card" key={item.number}>
              <div className="case-top"><span>{item.number}</span><p>{item.title}</p></div>
              <div className="case-result"><strong>{item.result}</strong><span>{item.unit}</span></div>
              <div className="case-price"><span>{item.priceLabel}</span><strong>{item.price}</strong></div>
              {item.detail && <p className="case-note">{item.detail}</p>}
            </article>
          ))}
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
        <div className="contact-heading">
          <p className="section-label">Контакты</p>
          <h2>Расскажите о задаче.<br /><span>Я предложу следующий шаг.</span></h2>
          <p className="contact-text">Выберите удобный способ связи. Отвечу на вопросы и помогу определить подходящий формат работы.</p>
        </div>
        <div className="contact-panel" aria-label="Способы связи">
          <a className="contact-link" href="tel:+79879513633">
            <span className="contact-icon"><FaPhoneAlt aria-hidden="true" /></span>
            <span><small>Телефон</small><strong>+7 (987) 951-36-33</strong></span>
            <FaArrowRight className="contact-arrow" aria-hidden="true" />
          </a>
          <a className="contact-link" href="https://vk.ru/target_vk63" target="_blank" rel="noreferrer">
            <span className="contact-icon"><FaVk aria-hidden="true" /></span>
            <span><small>Сообщество</small><strong>ВКонтакте</strong></span>
            <FaArrowRight className="contact-arrow" aria-hidden="true" />
          </a>
          <a className="contact-link" href="https://web.telegram.org/a/#427412230" target="_blank" rel="noreferrer">
            <span className="contact-icon"><FaTelegramPlane aria-hidden="true" /></span>
            <span><small>Мессенджер</small><strong>Telegram</strong></span>
            <FaArrowRight className="contact-arrow" aria-hidden="true" />
          </a>
          <a className="contact-button" href="https://vk.me/target_vk63" target="_blank" rel="noreferrer">
            <span><FaVk aria-hidden="true" /> Написать Екатерине</span>
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-name">Екатерина</span><span className="brand-role">таргетолог</span></a>
        <p>Таргетированная реклама<br />для бизнеса</p>
        <a href="#top">Наверх ↑</a>
      </footer>
    </main>
  );
}
