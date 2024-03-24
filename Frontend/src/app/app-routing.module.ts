import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { StudentcrudComponent } from './studentcrud/studentcrud.component';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Define the route for the home page
  { path: 'register', component: StudentcrudComponent },
  { path: 'about', component: Page1Component},
  { path: '**', redirectTo: '' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
