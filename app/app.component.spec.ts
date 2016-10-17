//Unit test cases for check in Application 
import { CheckInFormComponent } from './app.checkinform.component';
import { DisplayNavbarComponent } from './app.displaynavbar.component';
import { TestBed } from '@angular/core/testing';
import {  FormBuilder, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Check if all Components are  defined', () => {
let checkincomponent:CheckInFormComponent;
let navbarcomponent:DisplayNavbarComponent;
let formBuilder:FormBuilder;


 beforeEach(() => {
       formBuilder = new FormBuilder();
       checkincomponent = new CheckInFormComponent(formBuilder);
       navbarcomponent = new DisplayNavbarComponent();
       
       
    });

    it('should define CheckInFormComponent ', () => {
        expect(checkincomponent).toBeDefined();
    });

    it('should define the navbarcomponent form ', () => {
        expect(navbarcomponent).toBeDefined();
    });

    it('Should not allow to submit ' , () => {
      
        checkincomponent.checkinForm = formBuilder.group({
            bookingcode: ['', Validators.required],
            familyname: ['', Validators.required],
         });
        expect(checkincomponent.checkinForm.valid).toBe(false);

    });
     it('Should not allow to submit even if any field is invalid' , () => {
      
        checkincomponent.checkinForm = formBuilder.group({
            bookingcode: ['', Validators.required],
            familyname: ['Suresh', Validators.required],
         });
        expect(checkincomponent.checkinForm.valid).toBe(false);
    });
        it('should allow user to submit' , () => {    
         checkincomponent.checkinForm = formBuilder.group({
            bookingcode: ['HJSDE', Validators.required],
            familyname: ['Suresh', Validators.required],
         });
         expect(checkincomponent.checkinForm.valid).toBeTruthy;
    });
     
});


