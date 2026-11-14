import React, { useState } from 'react';
import './Cottages.css';
import cottagesData from './cottagesData.json';

export function Cottages() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="layout-grid">
      {/* Центральна колонка з контентом із JSON */}
      <main className="main-content">
        {/* Розділ «Про містечко» */}
        <section id="about" className="content-section">
          <h2 className="section-title">Про містечко</h2>
          {cottagesData.aboutText.map((paragraph, index) => (
            <p key={index} className="section-desc">
              {paragraph}
            </p>
          ))}

          <div className="features-row">
            {cottagesData.features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Розділ «Фотоальбом будівництва» */}
        <section id="stages" className="content-section">
          <h2 className="section-title">Фотоальбом будівництва</h2>
          <p className="section-desc">
            Хід зведення котеджів містечка — від закладки каркаса до чистового оздоблення та озеленення території.
          </p>

          <div className="stages-row">
            {cottagesData.stages.map((stage) => (
              <div key={stage.id} className="stage-card">
                <img src={stage.photo} alt={stage.title} />
                <div className="stage-overlay">
                  <h4>{stage.title}</h4>
                  <span>{stage.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Розділ «Розташування на карті» */}
        <section id="map" className="content-section">
          <h2 className="section-title">Розташування на карті</h2>
          <img
            src={cottagesData.mapPhoto}
            alt="Карта розташування Green Hills"
            className="map-image"
          />
        </section>

        {/* Розділ «Соціальні програми» */}
        <section id="social" className="content-section">
          <h2 className="section-title">Соціальні програми</h2>
          <div className="social-list">
            {cottagesData.socialPrograms.map((program) => (
              <div key={program.id} className="social-card">
                <div className="social-info">
                  <h3>{program.title}</h3>
                  <p>{program.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Права колонка: додатковий блок спецпропозиції */}
      <aside className="right-sidebar">
        <div className="promo-card">
          <span className="badge">СПЕЦПРОПОЗИЦІЯ</span>
          <h3>Отримайте дизайн-проєкт у подарунок</h3>
          <p>
            Запишіться на перегляд містечка цього місяця — і ми створимо дизайн інтер&apos;єру для вашого будинку.
          </p>

          {submitted ? (
            <p className="promo-success">Дякуємо! Менеджер зв&apos;яжеться з вами найближчим часом.</p>
          ) : (
            <form className="promo-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Ваше ім'я" required />
              <input type="tel" placeholder="Телефон" required />
              <button type="submit">Записатися на перегляд</button>
            </form>
          )}
        </div>
      </aside>
    </div>
  );
}