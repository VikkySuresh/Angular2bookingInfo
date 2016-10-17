import { Component} from '@angular/core';


@Component({	
    selector: 'my-app',   
    template:`<navbar-component></navbar-component>
			  <time-component></time-component>
			  <router-outlet></router-outlet>`

})
export class AppComponent {
constructor() {}	
}
