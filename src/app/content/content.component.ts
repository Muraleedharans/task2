import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  
  name = new FormControl('');
  
  @Output() newItemEvent = new EventEmitter<string>();

  addName(value: string) {
    this.newItemEvent.emit(value)
  }

}
