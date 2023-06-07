import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<IupdateStudent[]>('http://localhost:3000/studentById/'+id);
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
  email: string;
  phone: string;
  universityId:number;
  majorId: number;
}

//create Interface delete student
export interface IdeleteStudent{
  id:number;
}

 


