import { Component ,OnInit} from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
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
        // after form submission, doing form field empty
        this.newDeptObj = {
          deptId: 0,
          deptName: '',
          deptHeadEmpId: 0,
          createdDate: '',
        };
      } else {
        alert(res.message);
      }
    });
  }
  updateDept() {
    debugger;
    this.masterService.updateDepartment(this.newDeptObj).subscribe((res) => {
      debugger;
      if (res.result) {
        alert(`Department Updated Successfully`);
        this.getAllDeptList();
        this.newDeptObj = {
          deptId: 0,
          deptName: '',
          deptHeadEmpId: 0,
          createdDate: '',
        };
      } else {
        alert(res.message);
      }
    });
  }
  onEdit(dept: any) {
    this.newDeptObj = dept;
  }
  onDelete(deptId: number) {
    if (confirm(`Are you sure want to delete?`)) {
      debugger;
      this.masterService.deleteDepartmentById(deptId).subscribe((res) => {
        debugger;
        if (res.result) {
          alert(`Department Deleted Successfully`);
          this.getAllDeptList();
        } else {
          alert(res.message);
        }
      });
    }
  }
  getAllDeptList() {
    this.masterService.getAllDepartment().subscribe((response) => {
      debugger;
      this.deptList = response.data;
    });
  }
}
