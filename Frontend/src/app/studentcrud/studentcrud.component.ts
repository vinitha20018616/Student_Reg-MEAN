import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentcrud',
  templateUrl: './studentcrud.component.html',
  styleUrls: ['./studentcrud.component.scss']
})
export class StudentcrudComponent {

  StudentArray: any[] = [];
  currentStudentID = "";

  name: string = "";
  address: string = "";
  phone: string = "";

  constructor(private http: HttpClient, private router: Router) {
    this.getAllStudent();
  }

  getAllStudent() {
    this.http.get("https://studentregistrationappbackend.azurewebsites.net/user/getAll").subscribe((resultData: any) => {
      console.log(resultData);
      this.StudentArray = resultData.data;
    });
  }

  setUpdate(data: any) {
    this.name = data.name;
    this.address = data.address;
    this.phone = data.phone;
    this.currentStudentID = data._id;
  }

  UpdateRecords() {
    let bodyData = {
      "name": this.name,
      "address": this.address,
      "phone": this.phone,
    };
    this.http.patch("https://studentregistrationappbackend.azurewebsites.net/user/update" + "/" + this.currentStudentID, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Updated");
      this.getAllStudent();
    });
  }

  setDelete(data: any) {
    this.http.delete("https://studentregistrationappbackend.azurewebsites.net/user/delete" + "/" + data._id).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Deleted");
      this.getAllStudent();
    });
  }

  save() {
    if (this.currentStudentID == '') {
      this.register();
    } else {
      this.UpdateRecords();
    }
  }

  register() {
    let bodyData = {
      "name": this.name,
      "address": this.address,
      "phone": this.phone,
    };
    this.http.post("https://studentregistrationappbackend.azurewebsites.net/user/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Registered Successfully");
      this.name = '';
      this.address = '';
      this.phone = '';
      this.getAllStudent();
    });
  }

  // Method to handle navigation to the home page
  goToHome() {
    this.router.navigate(['/home']); // Replace '/home' with the actual route to your home page
  }
}