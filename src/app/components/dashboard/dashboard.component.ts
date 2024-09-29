import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  deptList: any[] = [];
  newDeptObj: any = {
    deptId: 0,
    deptName: '',
    deptHeadEmpId: 0,
    createdDate: '',
  };
  constructor(private masterService: MasterService) {}
  ngOnInit(): void {
    this.getAllDeptList();
  }
  saveDept() {
    debugger;
    this.masterService.createDepartment(this.newDeptObj).subscribe((res) => {
      debugger;
      if (res.result) {
        alert(`Department Created Successfully`);
        this.getAllDeptList();
        this.newDeptObj={
          deptId: 0,
          deptName: '',
          deptHeadEmpId: 0,
          createdDate: '',
        };
      }else{
        alert(res.message);
      }
    });
  }
  onEdit(dept: any){
    this.newDeptObj=dept;
  }
  getAllDeptList() {
    this.masterService.getAllDepartment().subscribe((response) => {
      debugger;
      this.deptList = response.data;
    });
  }
}
