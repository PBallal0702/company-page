import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements OnInit, OnDestroy {
  @Input('appCountUp') target = 0;
  @Input() suffix = '';
  @Input() duration = 1600;

  private observer?: IntersectionObserver;
  private started = false;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.el.nativeElement.textContent = `0${this.suffix}`;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.started) {
            this.started = true;
            this.animate();
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.4 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private animate(): void {
    const start = performance.now();
    const from = 0;
    const to = this.target;

    const step = (now: number) => {
      const progress = Math.min((now - start) / this.duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(from + (to - from) * eased);
      this.el.nativeElement.textContent = `${value}${this.suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
