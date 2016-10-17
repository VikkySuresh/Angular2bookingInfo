import { CheckInFormComponent } from './app.checkinform.component';
import { DisplayNavbarComponent } from './app.displaynavbar.component';
import { DisplayTimeComponent } from './app.displaytime.component';
import { TestBed }      from '@angular/core/testing';
import {  FormBuilder, Validators } from '@angular/forms';
import { By }           from '@angular/platform-browser';



/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('Check if all Components are  defined', () => {
let checkincomponent:CheckInFormComponent;
let navbarcomponent:DisplayNavbarComponent;
let formBuilder:FormBuilder;
let timecomponent:DisplayTimeComponent;

 beforeEach(() => {
       formBuilder = new FormBuilder();
       checkincomponent = new CheckInFormComponent(formBuilder);
       navbarcomponent = new DisplayNavbarComponent();
       timecomponent = new DisplayTimeComponent();
       
       
    });

    it('should define CheckInFormComponent ', () => {
        expect(checkincomponent).toBeDefined();
    });

    it('should define the navbarcomponent form ', () => {
        expect(navbarcomponent).toBeDefined();
    });

    it('Should be invalid to submit' , () => {
      
        checkincomponent.checkinForm = formBuilder.group({
            bookingcode: ['', Validators.required],
            familyname: ['', Validators.required],
         });
        expect(checkincomponent.checkinForm.valid).toBe(false);

    });
     it('should be a invalid for submission' , () => {
      
        checkincomponent.checkinForm = formBuilder.group({
            bookingcode: ['', Validators.required],
            familyname: ['Suresh', Validators.required],
         });
        expect(checkincomponent.checkinForm.valid).toBe(false);
    });
        it('should be  a valid form' , () => {    
         checkincomponent.checkinForm = formBuilder.group({
            bookingcode: ['HJSDE', Validators.required],
            familyname: ['Suresh', Validators.required],
         });
         expect(checkincomponent.checkinForm.valid).toBeTruthy;
    });
     
});


