import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';

@Directive({ selector: '[appFadeIn]', standalone: true })
export class FadeInDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private readonly el: ElementRef<HTMLElement>) {
    this.el.nativeElement.classList.add('fade-in');
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            this.observer?.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
