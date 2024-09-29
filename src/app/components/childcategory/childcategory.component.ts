import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-childcategory',
  templateUrl: './childcategory.component.html',
  styleUrls: ['./childcategory.component.css'],
})
export class ChildcategoryComponent implements OnInit {
  gridList: any[] = [];
  parentCategoryList: any[] = [];

  newObj: any = {
    childCategoryId: 0,
    categoryName: '',
    parentCategoryId: 0,
  };

  constructor(private masterService: MasterService) {}
  ngOnInit(): void {
    this.getGridData();
    this.getpCategory();
  }

  save() {
    debugger;
    this.masterService.createcCategory(this.newObj).subscribe((res) => {
      debugger;
      if (res.result) {
        alert(`Parent category Created Successfully`);
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
    this.masterService.updatecCategory(this.newObj).subscribe((res) => {
   debugger;
   alert(`Child Category Updated Successfully`);
      if (res.result) {
        alert(`Child Category Updated Successfully`);
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
      this.masterService.deletecCategoryById(deptId).subscribe((res) => {
        debugger;
        if (res.result) {
          alert(`Child Category Deleted Successfully`);
          this.getGridData();
        } else {
          alert(res.message);
        }
      });
    }
  }
  getpCategory() {
    this.masterService.getAllpCategory().subscribe((response) => {
      debugger;
      this.parentCategoryList = response.data;
      console.log(this.parentCategoryList);
    });
  }
  getGridData() {
    this.masterService.getAllcCategory().subscribe((response) => {
      debugger;
      this.gridList = response.data;
    });
  }
}
