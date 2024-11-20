import { Component,ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


 // Using @ViewChild to get a reference to HeaderComponent in the parent component
 @ViewChild(HeaderComponent) header:any;

 // Method to fetch data from the child component
 fetchData() {
   console.log(this.header.passToParent()); // Logs the data from child component's method
 }

  title = 'pone';
  empList = [
    { name: "Aadya", location: "Hyderabad", salary: 50000 },
    { name: "Raj", location: "Bangalore", salary: 45000 },
    { name: "Bhanu", location: "Hyderabad", salary: 50000 },
    { name: "Lalith", location: "Delhi", salary: 60000 }
  ];

  message: string = '';

  receiveMessage(data: string) {
    this.message = data;
  }
}

