import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) { }

// getAllData
  getData() {
    return this.http.get<IviewStudent[]>('http://localhost:3000/studentsList');
  }

// getDataById
  getDataById(id:number) {
    return this.http.get<IupdateStudent>('http://localhost:3000/studentById/'+id);
  }

// postData
  postData(data:IupdateStudent) {
    return this.http.post<IcreateStudent>('http://localhost:3000/addStudent', data);
  }

// updateData
  updateData(data:IupdateStudent) {
    return this.http.put<IupdateStudent>('http://localhost:3000/updateStudent', data);
  }

// deleteStudentData
  deleteData(data:IdeleteStudent) {
    return this.http.put<IdeleteStudent[]>('http://localhost:3000/deleteStudent',data);
  }

  // getGender
  getGender() {
    return this.http.get<IgenderData[]>('http://localhost:3000/genderData');
  }

  // getUniversity
  getUniversity() {
    return this.http.get<IuniversityData[]>('http://localhost:3000/universityData');
  }

  // getMajor
  getMajor() {
    return this.http.get<ImajorData[]>('http://localhost:3000/majorData');
  }

  // getSkill
  getSkill() {
    return this.http.get<IskillData[]>('http://localhost:3000/skillData');
  }
  
}

// create interface for view student
export interface IviewStudent{
  id: number;
  name: string;
  age: number;
  gender:string;
  email: string;
  phone: string;
  university:string;
  major: string;
}

// create Interface for create student add this key name,age,gender,email,phone,university,major
export interface IcreateStudent{
  name: string;
  age: number;
  gender:number;
  email: string;
  phone: string;
  university: number;
  major: number;
}

//create Interface update student
export interface IupdateStudent{
  id: number;
  name: string;
  age: number;
  genderId:number;
  skills:Array<number>;
  email: string;
  phone: string;
  universityId:number;
  majorId: number;
}

//create Interface delete student
export interface IdeleteStudent{
  id:number;
}

// genderData interface
export interface IgenderData{
   id:number;
   gender:string;
}

// universityData interface
export interface IuniversityData{
  id:number;
  university:string;
}

// majorData interface
export interface ImajorData{
  id:number;
  major:string;
}

//  skillData interface
export interface IskillData{
  id:number;
  skill:string;
}


