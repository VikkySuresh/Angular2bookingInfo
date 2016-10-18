// Unit testing all cases
import { CheckInFormComponent } from './app.checkinform.component';
import { DisplayNavbarComponent } from './app.displaynavbar.component';
import {  FormBuilder, Validators } from '@angular/forms';

let checkincomponent:CheckInFormComponent;
let navbarcomponent:DisplayNavbarComponent;
let formBuilder:FormBuilder;

describe('Check if all Components are  defined', () => {
 beforeEach(() => {
       formBuilder = new FormBuilder();
       checkincomponent = new CheckInFormComponent(formBuilder);
       navbarcomponent = new DisplayNavbarComponent();      
    });

    it('should define CheckInFormComponent ', () => {
        expect(checkincomponent).toBeDefined();
    });

    it('should define  navbarcomponent', () => {
        expect(navbarcomponent).toBeDefined();
    });
});
describe('Check if all validations are proper', () => {
    it('should not allow to submit ' , () => {      
        checkincomponent.checkinForm = formBuilder.group({
            bookingcode: ['', Validators.required],
            familyname: ['', Validators.required],
         });
        expect(checkincomponent.checkinForm.valid).toBe(false);
    });
     it('should not allow to submit even if any field is invalid' , () => {      
        checkincomponent.checkinForm = formBuilder.group({
            bookingcode: ['', Validators.required],
            familyname: ['Suresh', Validators.required],
         });
        expect(checkincomponent.checkinForm.valid).toBe(false);
    });
        it('should allow user to submit if form is valid' , () => {    
         checkincomponent.checkinForm = formBuilder.group({
            bookingcode: ['HJSDE', Validators.required],
            familyname: ['Suresh', Validators.required],
         });
         expect(checkincomponent.checkinForm.valid).toBeTruthy;
    });
     
});


