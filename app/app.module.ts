//App module where all modules are registered and Bootstrap component is mentioned
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RetrieveDetailsComponent } from './app.retrievedetails.component';
import { CheckInFormComponent }  from './app.checkinform.component';
import { DisplayNavbarComponent } from './app.displaynavbar.component';
import { DisplayTimeComponent } from './app.displaytime.component';
import { routing } from './app.routes';
@NgModule({
  imports: [ BrowserModule ,ReactiveFormsModule ,routing ],
  declarations: [ AppComponent , DisplayNavbarComponent,DisplayTimeComponent,RetrieveDetailsComponent,CheckInFormComponent],
  bootstrap: [ AppComponent ]  
})
export class AppModule { }
