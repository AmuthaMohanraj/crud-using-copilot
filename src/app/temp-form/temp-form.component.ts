import { Component, OnInit } from '@angular/core';
import { ApiService, IcreateStudent,IgenderData,ImajorData,IskillData,IuniversityData,IviewStudent} from '../api.service';
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


  genderData:IgenderData[]=[];
  universityData:IuniversityData[]=[];
  majorData:ImajorData[]=[];
  skillData:IskillData[]=[];
  selectedSkills: number[] = [];

  btnHide:boolean=true;

//create json using IdeleteStudent type


constructor (private s:ApiService) { }

  ngOnInit(): void {
  this.getData();
  this.getGender();
  this.getUniversity();
  this.getMajor();
  this.getSkill();
  }

  toggleSkillSelection(skillId: number) {
    if (this.selectedSkills.includes(skillId)) {
      this.selectedSkills = this.selectedSkills.filter(id => id !== skillId);
      console.log(this.selectedSkills,"unchecked");
      
    } else {
      this.selectedSkills.push(skillId)
      console.log(this.selectedSkills);   
    }
  }

  body:IupdateStudent={
    id:0,
    name:'',
    age:0,
    genderId:0,
    skills:this.selectedSkills,
    email: '',
    phone: '',
    universityId:0,
    majorId: 0
  }


 getData(){
    this.s.getData().subscribe((res:IviewStudent[])=>{
      console.log(res);
      this.viewData=res;
    })
 }

// getDataById
  getDataById(id:number){
    this.s.getDataById(id).subscribe((res:IupdateStudent)=>{ //IviewStudent[] error because of id
      console.log(res,"getdataById");
      this.body.id=res.id;
      this.body.name=res.name;
      this.body.age=res.age;
      this.body.genderId=res.genderId;
      this.body.email=res.email;
      this.body.phone=res.phone;
      this.body.universityId=res.universityId;
      this.body.majorId=res.majorId;
    })
  }

// postData
  postData(formInput:NgForm){
    this.s.postData(this.body).subscribe((res)=>{
      console.log(res);
      // this.getData();
      formInput.resetForm();
      this.selectedSkills = [];
    })
    console.log(this.body);
    
  }

// updateData
  updateData(formInput:NgForm){
    this.btnHide=true;
    this.s.updateData(this.body).subscribe((res:IupdateStudent)=>{
      console.log(res);
      this.getData();
      formInput.resetForm();
    })
  }

  editData(id:number){
    this.btnHide=false;
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

// getGender
  getGender(){  
    this.s.getGender().subscribe((res:IgenderData[])=>{
      this.genderData=res;
      console.log(res);
    })
  }

// getUniversity
  getUniversity(){
    this.s.getUniversity().subscribe((res:IuniversityData[])=>{
      this.universityData=res;
      console.log(res);
    })
  }

// getMajor
  getMajor(){
    this.s.getMajor().subscribe((res:ImajorData[])=>{
      this.majorData=res;
      console.log(res);
    })
  }

// getSkill
  getSkill(){
    this.s.getSkill().subscribe((res:IskillData[])=>{
      console.log(res);
      this.skillData=res;
    })
  }

}
