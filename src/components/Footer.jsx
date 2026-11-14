import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>GREEN HILLS</h3>
          <p>Сучасне закрите котеджне містечко преміум-класу серед вікового соснового лісу за 30 хвилин від Києва.</p>
        </div>

        <div className="footer-contacts">
          <h4>Контакти</h4>
          <p>Київська обл., Обухівський р-н</p>
          <p>+38 (044) 234-56-78</p>
          <p>sales@greenhills.ua</p>
        </div>

        <div className="footer-socials">
          <h4>Ми в соцмережах</h4>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://t.me" target="_blank" rel="noreferrer">Telegram</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Котеджне містечко «Green Hills». Усі права захищено.
      </div>
    </footer>
  );
}