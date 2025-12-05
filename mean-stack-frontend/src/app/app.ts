import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Crud } from './crud'; 

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  
  constructor(private crud:Crud){} 
  
  getItems() {
    this.crud.getAll().subscribe((data) => {
      console.log(data);
    });
  }

  protected readonly title = signal('mean-stack-frontend');
}
