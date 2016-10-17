import { Component } from '@angular/core';

@Component({
  template: `<div class="col xs -6 alert alert-success fade in alertdisplay">
            	 <a href="#" class="close" [routerLink]="['/']" aria-label="close">&times;</a>
  				<strong>Success! Booking is Confirmed.</strong>
  			 </div>`,
  styleUrls:['./app/css/app.retrieveform.styles.css']
})

// Component class
export class RetrieveDetailsComponent {}