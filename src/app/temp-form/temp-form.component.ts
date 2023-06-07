import { Component, OnInit } from '@angular/core';
import { ApiService, IcreateStudent,IviewStudent} from '../api.service';
import { IupdateStudent,IdeleteStudent} from '../api.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.scss']
})
export class TempFormComponent implements OnInit {
 
//create json using IupdateStudent type

viewData:IviewStudent[]=[]

  body:IupdateStudent={
    id:0,
    name:'',
    age: 0,
    genderId:0,
    email: '',
    phone: '',
    universityId:0,
    majorId: 0
  }

//create json using IdeleteStudent type


constructor (private s:ApiService) { }

  ngOnInit(): void {
  this.getData();
  }

 getData(){
    this.s.getData().subscribe((res:IviewStudent[])=>{
      console.log(res);
      this.viewData=res;
    })
 }

// getDataById
  getDataById(id:number){
    this.s.getDataById(id).subscribe((res:IupdateStudent[])=>{ //IviewStudent[] error because of id
      console.log(res);
      this.body.id=res[0].id;
      this.body.name=res[0].name;
      this.body.age=res[0].age;
      this.body.genderId=res[0].genderId;
      this.body.email=res[0].email;
      this.body.phone=res[0].phone;
      this.body.universityId=res[0].universityId;
      this.body.majorId=res[0].majorId;
    })
  }

// postData
  postData(){
    this.s.postData(this.body).subscribe((res)=>{
      console.log(res);
      this.getData();
    })
    console.log(this.body);
    
  }

// updateData
  updateData(){
    this.s.updateData(this.body).subscribe((res:IupdateStudent)=>{
      console.log(res);
      this.getData();
    })
  }

  editData(id:number){
    this.getDataById(id);
  }

// deleteStudentData
  deleteData(id:number){
    const deleteData: IdeleteStudent = {id}; // explain this line
    this.s.deleteData(deleteData).subscribe((res)=>{
      console.log(res);
      this.getData();
    })
  }

}
