import { Component } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  
template='am from template data';

funtem(){
  return 'Hello am template function'
}
}
