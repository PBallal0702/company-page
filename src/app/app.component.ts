import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { StatsBarComponent } from './components/stats-bar/stats-bar.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { ImpactComponent } from './components/impact/impact.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    StatsBarComponent,
    AboutComponent,
    FeaturesComponent,
    ImpactComponent,
    PricingComponent,
    TestimonialsComponent,
    CtaComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MedTech HMS';
}
