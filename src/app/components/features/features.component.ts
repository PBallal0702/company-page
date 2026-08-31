import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: 'calendar',
      title: 'OPD & Appointment Scheduling',
      desc: 'Book patient appointments and route them to the right doctor with live department and workstation availability.',
    },
    {
      icon: 'stethoscope',
      title: 'Doctor Consultation Workflow',
      desc: 'A structured desk for history, complaints, diagnosis, advice and summary — everything for one patient visit.',
    },
    {
      icon: 'heart',
      title: 'Vitals & Patient Demographics',
      desc: 'Capture height, weight, BP and other vitals alongside demographic details before every consultation.',
    },
    {
      icon: 'file',
      title: 'Investigation Management',
      desc: 'Request investigations, track their status and generate investigation reports for every patient.',
    },
    {
      icon: 'pill',
      title: 'Prescription & RX Master',
      desc: 'Write prescriptions from a searchable medicine master, or reuse saved diagnosis-to-prescription templates.',
    },
    {
      icon: 'building',
      title: 'Department & Workstation Setup',
      desc: 'Configure departments, workstations and categories so patients are always routed to the right queue.',
    },
    {
      icon: 'users',
      title: 'Employee Recruitment & Mapping',
      desc: 'Recruit new staff and map employees to departments and workstations from one admin screen.',
    },
    {
      icon: 'shield',
      title: 'Role-Based Access Control',
      desc: 'Super Admin, Admin, Doctor, Receptionist and User roles each see only the screens relevant to them.',
    },
    {
      icon: 'printer',
      title: 'Printable Prescriptions & Reports',
      desc: 'Generate ready-to-print prescription and investigation PDFs straight from a patient\'s record.',
    },
  ];
}
