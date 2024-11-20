import { Component, Output,EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-outputdecorator',
  templateUrl: './outputdecorator.component.html',
  styleUrl: './outputdecorator.component.css'
})
export class OutputdecoratorComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello Parent! This is from the Child.');
  }
}
