//our root app component
import {Component, Attribute} from '@angular/core';

@Component({
  selector: 'time-component',
  template: `
      <div class="container">
        <div align ="right">
          {{date | date:'dd-MMM-yyyy HH:mm:ss'}}
        </div>
    `
})
export class DisplayTimeComponent {
   date: Date;

    constructor() {
        this.date = new Date();  
        setInterval(() => this.date = new Date(), 1000);
    }

} 