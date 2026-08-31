import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'reveal');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'is-visible');
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
