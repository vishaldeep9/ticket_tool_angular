import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
})
export class NewTicketComponent implements OnInit {
  deptList: any[] = [];
  pCategoryList: any[] = [];
  cCategoryList: any[] = [];
  // this category hold all the data , but we need based on selecting parent means filtered data we need
  childFilterCategory:any[]=[];
  selectPCategory:string=""

  newTicketObj:any={
  "employeeId": 0,
  "severity": "",
  "childCategoryId": 0,
  "deptId": 0,
  "requestDetails": ""
}

  constructor(private masterService: MasterService) {}
  ngOnInit(): void {
    const employeeData=localStorage.getItem('ticketUser');
    if(employeeData){
      const userData=JSON.parse(employeeData);
      this.newTicketObj.employeeId=userData.employeeId;
    }
    this.getDataFromForkJoin();
    // this.getAllDept();
    // this.getpCategory();
    // this.getcCategory();
  }

  onCreateTicket(){
    debugger;
    this.masterService.createTicket(this.newTicketObj).subscribe((response)=>{
      debugger;
      if(response.result){
        alert(`Ticket Created Successfully`);
      
      }else{
        alert(response.message);
      }
    })
  }

//  'filter' --> to get multiple record & 'find' -> to get just one record(which will be first one)
//Here we are filtering through name bcz there was no parentCategoryId
  onCategoryChange(){
    this.childFilterCategory=this.cCategoryList.filter(x=>x.parentCategoryName==this.selectPCategory)
  }

   getDataFromForkJoin(){
    this.masterService.getCombinedData().subscribe(([allDept,allPCategory,allCCategory])=>{
      console.log("Departments:", allDept);
      console.log("Parent Categories:", allPCategory);
      console.log("Child Categories:", allCCategory);
      this.deptList=allDept.data;
      this.pCategoryList=allPCategory.data;
      this.cCategoryList=allCCategory.data;
    },(error)=>{
      alert(`Error loading data', ${error}`);
    }
  )
   }

  // getAllDept() {
  //   this.masterService.getAllDepartment().subscribe((response) => {
  //     this.deptList = response.data;
  //   });
  // }
  // getpCategory() {
  //   this.masterService.getAllpCategory().subscribe((res) => {
  //     this.pCategoryList = res.data;
  //     console.log("parentCategory",this.pCategoryList)
  //   });
  // }

  // getcCategory() {
  //   this.masterService.getAllcCategory().subscribe((res) => {
  //     this.cCategoryList = res.data;
  //     console.log("ChildCategory",this.cCategoryList)
  //   });
  // }
}
