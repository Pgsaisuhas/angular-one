import { Component } from '@angular/core';
import { DesignationComponent } from '../designation/designation.component';
import { RolesComponent } from '../roles/roles.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [DesignationComponent, RolesComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentComponent: string = 'designation';
  changeTab(tab: string) {
    this.currentComponent = tab;
  }
}
