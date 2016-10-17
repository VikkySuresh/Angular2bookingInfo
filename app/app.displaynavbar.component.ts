import { Component } from '@angular/core';

@Component({
  selector: 'navbar-component',

  template:` <nav class="navbar navbar-inverse" role="navigation">
  
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" >
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>    
    <a class="navbar-brand " style="width:100%;position:absolute;text-align:center" href="#">Check In Prototype</a>
  </div>

</nav>`
})

export class DisplayNavbarComponent {}
  

