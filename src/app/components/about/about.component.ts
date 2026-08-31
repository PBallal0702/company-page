import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values = [
    {
      title: 'Built with clinicians',
      desc: 'Every workflow is shaped alongside doctors, nurses and admin staff — not just designed on paper.',
    },
    {
      title: 'Security first',
      desc: 'Role-based access, encrypted records and full audit trails keep patient data protected at every step.',
    },
    {
      title: 'Grows with you',
      desc: 'From a single OPD clinic to a multi-department hospital network, the same system scales with you.',
    },
  ];
}
