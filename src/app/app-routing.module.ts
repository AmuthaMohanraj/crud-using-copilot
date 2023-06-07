import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempFormComponent } from './temp-form/temp-form.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  {path:'TempleteForm',component:TempFormComponent},
  {path:'Practice',component:PracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
