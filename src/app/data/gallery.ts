export interface GalleryItem {
  src: string;
  title: string;
  cat: string;
  label: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { src: '/images/resepshen.png', title: 'Ресепшен', cat: 'reception', label: 'Ресепшен' },
  { src: '/images/garderob.png', title: 'Гардероб', cat: 'reception', label: 'Ресепшен' },
  { src: '/images/foto-zona.png', title: 'Фото-зона', cat: 'reception', label: 'Ресепшен' },
  { src: '/images/zona-ozhidaniya.png', title: 'Зона ожидания VIP', cat: 'comfort', label: 'Комфорт' },
  { src: '/images/komanda.png', title: 'Команда клиники', cat: 'team', label: 'Команда' },
  { src: '/images/kabinet-diagnostiki.png', title: 'Кабинет диагностики', cat: 'diagnostic', label: 'Диагностика' },
  { src: '/images/hirurgicheskiy-kabinet.png', title: 'Хирургический кабинет', cat: 'treatment', label: 'Кабинеты' },
  { src: '/images/kabinet.png', title: 'Лечебный кабинет', cat: 'treatment', label: 'Кабинеты' },
  { src: '/images/ubornaya.png', title: 'Уборная', cat: 'comfort', label: 'Комфорт' },
];

export const GALLERY_FILTERS = [
  { id: 'all', label: 'Все' },
  { id: 'reception', label: 'Ресепшен' },
  { id: 'comfort', label: 'Комфорт' },
  { id: 'treatment', label: 'Кабинеты' },
  { id: 'diagnostic', label: 'Диагностика' },
  { id: 'team', label: 'Команда' },
] as const;
