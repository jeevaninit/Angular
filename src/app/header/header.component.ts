import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 // Property holding data to be sent to the parent component
 data = "Data from the Header Component";

 // Method to return data to the parent component
 passToParent() {
   return this.data;
 }
}
