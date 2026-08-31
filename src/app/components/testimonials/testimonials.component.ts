import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote: 'Our OPD front desk cut patient check-in time almost in half. What used to be three registers is now one screen.',
      name: 'Dr. Ananya Rao',
      role: 'Medical Director, Sunrise Multispeciality Hospital',
      initials: 'AR',
    },
    {
      quote: 'Doctors stopped rewriting the same prescription for every patient with the same condition. Saved diagnosis templates alone cut consultation time noticeably.',
      name: 'Vikram Mehta',
      role: 'Hospital Administrator, CarePlus Clinics',
      initials: 'VM',
    },
    {
      quote: 'We rolled out MedTech HMS across three departments in under a month. The department and workstation configuration alone changed how we plan staffing.',
      name: 'Dr. Sana Iyer',
      role: 'Founder, Iyer Health Network',
      initials: 'SI',
    },
  ];
}
