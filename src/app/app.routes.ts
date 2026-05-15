import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { hero: true, title: 'Luxe Dental clinic — Стоматология премиум-класса' } },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    data: { title: 'О клинике — Luxe Dental clinic' },
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then((m) => m.ServicesComponent),
    data: { title: 'Услуги — Luxe Dental clinic' },
  },
  {
    path: 'team',
    loadComponent: () => import('./pages/team/team.component').then((m) => m.TeamComponent),
    data: { title: 'Команда — Luxe Dental clinic' },
  },
  {
    path: 'team/:slug',
    loadComponent: () => import('./pages/team-member/team-member.component').then((m) => m.TeamMemberComponent),
    data: { title: 'Профиль — Luxe Dental clinic' },
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
    data: { title: 'Фото клиники — Luxe Dental clinic' },
  },
  {
    path: 'contacts',
    loadComponent: () => import('./pages/contacts/contacts.component').then((m) => m.ContactsComponent),
    data: { title: 'Контакты — Luxe Dental clinic' },
  },
  { path: '**', redirectTo: '' },
];
