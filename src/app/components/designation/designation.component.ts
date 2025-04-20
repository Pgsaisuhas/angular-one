import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';
import { error } from 'console';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  isLoader: boolean = true;


  designationList: IDesignation[] = [];
  ngOnInit(): void {
    this.masterService.getDesignation().subscribe((res: APIResponseModel) => {
      this.designationList = res.data;
      this.isLoader = false;
      console.log(this.designationList);
    }, error => {
      console.error('Error fetching designation data:', error);
      this.isLoader = false;
    });
  }
  masterService = inject(MasterService);
}
