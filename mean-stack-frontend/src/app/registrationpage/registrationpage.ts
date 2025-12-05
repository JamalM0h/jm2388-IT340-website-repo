import { Component, OnInit} from '@angular/core';
import { Crud } from '../crud';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registrationpage',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './registrationpage.html',
  styleUrl: './registrationpage.css',
})
export class Registrationpage implements OnInit{

  constructor(private crud:Crud){}
   
  form!: FormGroup;

  ngOnInit():void{
  this.form = new FormGroup({
     username: new FormControl('', Validators.required),
     email: new FormControl('', Validators.email),
     password: new FormControl('', Validators.required)
  });
}

   addReg() {
     if(this.form.valid) {
     this.crud.addUser(this.form.value).subscribe((response) => {
       console.log(response);
     });
     }
  }
}
