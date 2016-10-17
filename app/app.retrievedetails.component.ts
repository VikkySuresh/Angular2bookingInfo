//Component to display alert after retrieve booking button click
import { Component } from '@angular/core';
@Component({
  template: `<div class="col xs -6 alert alert-success fade in alertdisplay">
            	 <a href="#" class="close" [routerLink]="['/']" aria-label="close">&times;</a>
  				<strong>Congrats! Your details are validated.</strong>
  			 </div>`,
  styleUrls:['./app/css/app.retrieveform.styles.css']
})
export class RetrieveDetailsComponent {}