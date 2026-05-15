import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { GALLERY_FILTERS, GALLERY_ITEMS, GalleryItem } from '../../data/gallery';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink, FadeInDirective],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  readonly filters = GALLERY_FILTERS;
  currentFilter = signal('all');
  visibleItems = signal<GalleryItem[]>([...GALLERY_ITEMS]);
  lightboxOpen = signal(false);
  lightboxIndex = signal(0);

  setFilter(id: string): void {
    this.currentFilter.set(id);
    this.visibleItems.set(
      id === 'all' ? [...GALLERY_ITEMS] : GALLERY_ITEMS.filter((i) => i.cat === id),
    );
  }

  openLightbox(index: number): void {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
    document.body.style.overflow = '';
  }

  step(dir: number): void {
    const items = this.visibleItems();
    if (!items.length) return;
    const next = (this.lightboxIndex() + dir + items.length) % items.length;
    this.lightboxIndex.set(next);
  }

  wrapIndex(offset: number): number {
    const items = this.visibleItems();
    if (!items.length) return 0;
    return (this.lightboxIndex() + offset + items.length) % items.length;
  }

  currentItem(): GalleryItem | undefined {
    return this.visibleItems()[this.lightboxIndex()];
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent): void {
    if (!this.lightboxOpen()) return;
    if (e.key === 'Escape') this.closeLightbox();
    if (e.key === 'ArrowLeft') this.step(-1);
    if (e.key === 'ArrowRight') this.step(1);
  }
}
