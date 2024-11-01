import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color = 'success';

  constructor() { }

  get colors() {
    return this.color === 'success' 
      ? 'bg-success-700 hover:bg-success-800 focus:ring-success-300' 
      : 'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300';
  }
}
