// component to display time on webpage
import {Component} from '@angular/core';

@Component({
  selector: 'time-component',
  template: `
      <div class="container">
        <div align ="right">
          {{date | date:'medium'}}
        </div></div>
    `
})
export class DisplayTimeComponent {
   date: Date;

    constructor() {
        this.date = new Date();  
        setInterval(() => this.date = new Date(), 1000);
    }

} 