import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const LOGO_SVG = `<svg class="logo-icon" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M14 2C8 2 4 7 4 12c0 4 2 8 4 11 2 3 4 5 6 7 2-2 4-4 6-7 2-3 4-7 4-11 0-5-4-10-10-10z" stroke="#C5A059" stroke-width="1.2" fill="none"/>
  <path d="M14 8v16M10 14h8" stroke="#C5A059" stroke-width="0.8" opacity="0.6"/>
</svg>`;

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a routerLink="/" class="logo">
              <span [innerHTML]="logoSvg"></span>
              <span class="logo-text">Luxe Dental<span>clinic</span></span>
            </a>
            <p>Премиальная стоматология: имплантация, эстетика, терапия и протезирование в атмосфере тихой роскоши.</p>
          </div>
          <div class="footer-col">
            <h4>Навигация</h4>
            <ul>
              <li><a routerLink="/about">О клинике</a></li>
              <li><a routerLink="/services">Услуги</a></li>
              <li><a routerLink="/team">Команда</a></li>
              <li><a routerLink="/gallery">Фото клиники</a></li>
              <li><a routerLink="/team/dmitry-koshkin">Дмитрий Кошкин (директор)</a></li>
              <li><a routerLink="/contacts">Контакты</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Услуги</h4>
            <ul>
              <li><a routerLink="/services" fragment="implants">Имплантация</a></li>
              <li><a routerLink="/services" fragment="therapy">Терапия</a></li>
              <li><a routerLink="/services" fragment="ortho">Ортодонтия</a></li>
              <li><a routerLink="/services" fragment="prosthetics">Протезирование</a></li>
              <li><a routerLink="/services" fragment="aesthetic">Эстетика</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Контакты</h4>
            <ul>
              <li><a href="tel:[Указать номер]">[Указать номер]</a></li>
              <li><a href="mailto:info@luxedental.demo">info@luxedental.demo</a></li>
              <li>[Указать Адрес]</li>
              <li>Пн–Сб: 9:00–21:00</li>
            </ul>
          </div>
        </div>
        <div class="footer-legal">
          <p>
            <strong>ООО «Люкс Дентал»</strong> · ИНН [Указать ИНН] · ОГРН [Указать ОГРН] · Лицензия № [Указать
            номер Лицензии] от [Указать Дату]
          </p>
          <p>
            Имеются противопоказания. Необходима консультация специалиста. Информация на сайте не является публичной
            офертой (ст. 437 ГК РФ). Стоимость услуг уточняйте у администратора.
          </p>
          <p>
            Обработка персональных данных осуществляется в соответствии с Федеральным законом № 152-ФЗ «О персональных
            данных». Отправляя форму, вы соглашаетесь с политикой конфиденциальности.
          </p>
          <p class="footer-demo">
            ⚠ Демонстрационный сайт. Все персонажи, награды, контактные данные и юридические реквизиты являются
            вымышленными и созданы исключительно в учебных/презентационных целях. Реальная медицинская помощь данным
            ресурсом не оказывается.
          </p>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Luxe Dental clinic. Все права защищены.</span>
          <span>Ваша улыбка — наше искусство ♥</span>
        </div>
      </div>
    </footer>
  `,
})
export class SiteFooterComponent {
  logoSvg = LOGO_SVG;
}
