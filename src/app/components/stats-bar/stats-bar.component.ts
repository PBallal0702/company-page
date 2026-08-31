import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpDirective } from '../../shared/directives/count-up.directive';
import { RevealDirective } from '../../shared/directives/reveal.directive';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

@Component({
  selector: 'app-stats-bar',
  standalone: true,
  imports: [CommonModule, CountUpDirective, RevealDirective],
  templateUrl: './stats-bar.component.html',
  styleUrl: './stats-bar.component.scss'
})
export class StatsBarComponent {
  stats: Stat[] = [
    { value: 40, suffix: '+', label: 'Hospitals & clinics onboarded' },
    { value: 12000, suffix: '+', label: 'Patients managed monthly' },
    { value: 99, suffix: '%', label: 'Platform uptime' },
    { value: 35, suffix: '%', label: 'Avg. reduction in wait time' },
  ];
}
