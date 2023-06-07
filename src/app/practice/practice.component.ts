import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data } from '../data';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent {
  name:string=''
  age:number=0
  gender:string=''
  check:string=''
  html:boolean=false
  css:boolean=false
  js:boolean=false
  dotnet:boolean=false

  fun(value:any){
    console.log(value)
  }

   data=new Data('','','','',false,false,false,false)

 resetForm(myForm:NgForm){
    myForm.reset()
 }

}

