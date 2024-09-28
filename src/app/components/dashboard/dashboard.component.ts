import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  deptList: any[] = [];

  constructor(private masterService: MasterService) {}
  ngOnInit(): void {
    this.getDeptList();
  }
  getDeptList() {
    this.masterService.getAllDepartment().subscribe((response) => {
      debugger;
      this.deptList = response.data;
    });
  }
}
