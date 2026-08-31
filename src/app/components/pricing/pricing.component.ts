import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';

interface Plan {
  name: string;
  price: string;
  period: string;
  desc: string;
  featured?: boolean;
  features: string[];
  cta: string;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  plans: Plan[] = [
    {
      name: 'Starter',
      price: '₹14,999',
      period: '/month',
      desc: 'For single clinics getting started with digital OPD management.',
      features: [
        'Up to 3 doctor accounts',
        'OPD & appointment scheduling',
        'Basic patient records',
        'Email support',
      ],
      cta: 'Start Free Trial',
    },
    {
      name: 'Professional',
      price: '₹39,999',
      period: '/month',
      desc: 'For growing hospitals that need investigations, RX master and staff configuration.',
      featured: true,
      features: [
        'Unlimited doctor accounts',
        'Full consultation & diagnosis desk',
        'Investigation & RX master management',
        'Role-based access control',
        'Priority support',
      ],
      cta: 'Book a Demo',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      desc: 'For hospital networks that need multi-department rollout and SLAs.',
      features: [
        'Everything in Professional',
        'Multi-department & multi-workstation rollout',
        'Custom integrations & API access',
        'Dedicated onboarding & SLA',
        '24/7 premium support',
      ],
      cta: 'Talk to Sales',
    },
  ];
}
