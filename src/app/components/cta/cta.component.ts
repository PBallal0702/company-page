import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {}
