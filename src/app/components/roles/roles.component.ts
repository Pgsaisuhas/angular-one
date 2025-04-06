import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  // firstName: string = 'Angular tut';
  // angularVersion: string = 'Angular 18.0.0';
  // version: number = 18;
  // inactive: boolean = true;
  // currentDate: Date = new Date();
  // inputType: string = 'radio';
  // selectedState: string = '';
  rolesList: IRole[] = [];
  http = inject(HttpClient);


  constructor() {}
  ngOnInit(): void {
    // alert('Hello from RolesComponent');
    console.log('Hello from RolesComponent');
    this.getAllRoles();
  }

  getAllRoles() {
    this.http
      .get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles')
      .subscribe((res: APIResponseModel) => {
        this.rolesList = (res.data);
        console.log(this.rolesList);
      });
  }
}
