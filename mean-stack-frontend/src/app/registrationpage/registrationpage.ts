import { Component, OnInit} from '@angular/core';
import { Crud } from '../crud';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-registrationpage',
  imports: [ReactiveFormsModule],
  templateUrl: './registrationpage.html',
  styleUrl: './registrationpage.css',
})
export class Registrationpage implements OnInit{

  constructor(private crud:Crud){}
   
  form!: FormGroup;
 
  ngOnInit():void{
  this.form = new FormGroup({
     username: new FormControl(''),
     email: new FormControl(''),
     password: new FormControl('')
  });
}

   addReg() {
     this.crud.addUser(this.form.value).subscribe((response) => {
       console.log(response);
     });
}
}
