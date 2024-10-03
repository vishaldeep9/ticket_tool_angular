import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  gridList: any[] = [];
  deptList: any[] = [];//bcz we need deptId at the time of creating employee
  roleList: any[] = [];//bcz we need role at the time of creating employee
  isNewView:boolean=false;

  newObj: any = {
    employeeId: 0,
    employeeName: '',
    contactNo: '',
    emailId: '',
    deptId: 0,
    password: '',
    gender: '',
    role: '',
  };

  constructor(private masterService: MasterService) {}
  ngOnInit(): void {
    this.getGridData();
    this.getAllDepartment();
    this.getAllRoles();
  }

  save() {
    debugger;
    this.masterService.createEmp(this.newObj).subscribe((res) => {
      debugger;
      if (res.result) {
        alert(`Employee category Created Successfully`);
        this.getGridData();
        // after form submission, doing form field empty
        this.newObj = {
          childCategoryId: 0,
          categoryName: '',
          parentCategoryId: 0,
        };
      } else {
        alert(res.message);
      }
    });
  }
  update() {
    debugger;
    this.masterService.updateEmp(this.newObj).subscribe((res) => {
      debugger;
      alert(`Employee Updated Successfully`);
      if (res.result) {
        alert(`Employee Updated Successfully`);
        this.getGridData();
        this.newObj = {
          childCategoryId: 0,
          categoryName: '',
          parentCategoryId: 0,
        };
      } else {
        alert(res.message);
      }
    });
  }
  onEdit(dept: any) {
    this.newObj = dept;
  }
  onDelete(deptId: number) {
    if (confirm(`Are you sure want to delete?`)) {
      debugger;
      this.masterService.deleteEmpById(deptId).subscribe((res) => {
        debugger;
        if (res.result) {
          alert(`Employee Deleted Successfully`);
          this.getGridData();
        } else {
          alert(res.message);
        }
      });
    }
  }
  getAllDepartment() {
    this.masterService.getAllDepartment().subscribe((response) => {
      debugger;
      this.deptList = response.data;
    });
  }
  getAllRoles() {
    this.masterService.getAllRoles().subscribe((response) => {
      debugger;
      this.roleList= response.data;
    });
  }
  getGridData() {
    this.masterService.getAllEmp().subscribe((response) => {
      debugger;
      this.gridList = response.data;
    });
  }
}
