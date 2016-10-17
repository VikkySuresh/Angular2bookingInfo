
import { Component,Directive,OnInit, ElementRef} from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { CheckIn } from './app.checkinform.interface';



@Directive({
    selector: 'input[formControlName=bookingid]',
    host: {
        '(input)': 'ref.nativeElement.value=$event.target.value.toUpperCase()',
    }

})
export class UpperCaseText {
    constructor(private ref: ElementRef) {
    }
}


@Component({    
    selector: 'my-app',   
    templateUrl:'../src/app/app.checkin.component.html',
    styleUrls:['../src/app/app.checkinform.styles.css']

})
export class CheckInFormComponent implements OnInit{
    public checkinForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];
    constructor(private formBuilder: FormBuilder){}

ngOnInit() {

    this.checkinForm =  this.formBuilder.group({
        'bookingcode': [null, <any>Validators.required],
        'familyname' :[null , <any>Validators.required]
      
        
    });
    this.subcribeToFormChanges();

}
 subcribeToFormChanges() {
        const myFormStatusChanges$ = this.checkinForm.statusChanges;
        const myFormValueChanges$ = this.checkinForm.valueChanges;
        
        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }

}
