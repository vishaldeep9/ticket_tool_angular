import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-parentcategory',
  templateUrl: './parentcategory.component.html',
  styleUrls: ['./parentcategory.component.css'],
})
export class ParentcategoryComponent implements OnInit {
  gridList: any[] = [];
  deptList:any[]=[]
  newObj: any = {
    categoryId: 0,
    categoryName: '',
    deptId: 0,
  };
  constructor(private masterService: MasterService) {}
  ngOnInit(): void {
    this.getGridData();
    this.getAllDept();
  }
  save() {
    debugger;
    this.masterService.createpCategory(this.newObj).subscribe((res) => {
      debugger;
      if (res.result) {
        alert(`Parent category Created Successfully`);
        this.getGridData();
        // after form submission, doing form field empty
        this.newObj = {
          categoryId: 0,
          categoryName: '',
          deptId: 0,
        };
      } else {
        alert(res.message);
      }
    });
  }
  update() {
    debugger;
    this.masterService.updatepCategory(this.newObj).subscribe((res) => {
      debugger;
      if (res.result) {
        alert(`parent Category Updated Successfully`);
        this.getGridData();
        this.newObj = {
          categoryId: 0,
          categoryName: '',
          deptId: 0,
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
      this.masterService.deletepCategoryById(deptId).subscribe((res) => {
        debugger;
        if (res.result) {
          alert(`Parent Category Deleted Successfully`);
          this.getGridData();
        } else {
          alert(res.message);
        }
      });
    }
  }
  getAllDept() {
    this.masterService.getAllDepartment().subscribe((response) => {
      debugger;
      this.deptList = response.data;
    });
  }
  getGridData() {
    this.masterService.getAllpCategory().subscribe((response) => {
      debugger;
      this.gridList = response.data;
    });
  }
}
