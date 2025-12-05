import { Component } from '@angular/core';
import { NgModule } from '@angular/core'; 
import { Crud } from '../crud';

@Component({
  selector: 'app-aboutpage',
  imports: [],
  templateUrl: './aboutpage.html',
  styleUrl: './aboutpage.css',
})
export class Aboutpage {

  constructor(private crud:Crud){}

   postData: any = {
     username: "jamal123",
     email: "jamal123@gmail.com",
     password: "12345678"
   };

  getItems() {
    this.crud.getAll().subscribe((data) => {
      console.log(data);
    });
  }

  sendData() {
     this.crud.postData(this.postData).subscribe((response) => {
       console.log(response);
     });
  }
  
  addReg() {
       this.crud.addUser(this.postData).subscribe((response) => {
       console.log(response);
     });
  }
}
