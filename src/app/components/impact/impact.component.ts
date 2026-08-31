import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CountUpDirective } from '../../shared/directives/count-up.directive';

interface ImpactStat {
  value: number;
  suffix: string;
  title: string;
  desc: string;
}

interface Reason {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CommonModule, RevealDirective, CountUpDirective],
  templateUrl: './impact.component.html',
  styleUrl: './impact.component.scss'
})
export class ImpactComponent {
  reasons: Reason[] = [
    {
      title: 'Cut administrative work, not corners',
      desc: 'Automate scheduling, consultation notes and prescriptions so staff spend hours less on paperwork every week.',
    },
    {
      title: 'One system, every department',
      desc: 'No more switching between disconnected registers for OPD, consultations, prescriptions and admin.',
    },
    {
      title: 'Decisions backed by real data',
      desc: 'Live dashboards give administrators the visibility to act, not just report after the fact.',
    },
    {
      title: 'Support that knows healthcare',
      desc: 'Onboarding and support built around how clinics actually run, not generic software helpdesks.',
    },
  ];

  impactStats: ImpactStat[] = [
    { value: 42, suffix: '%', title: 'Less paperwork', desc: 'Reduction in manual, repeat data entry' },
    { value: 28, suffix: '%', title: 'Faster patient flow', desc: 'From check-in to consultation' },
    { value: 3, suffix: 'x', title: 'Faster prescriptions', desc: 'Reuse saved diagnosis-to-prescription templates' },
    { value: 24, suffix: '/7', title: 'System availability', desc: 'Reliable uptime your front desk can depend on' },
  ];
}
