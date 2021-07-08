import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.scss']
})

export class SampleFormComponent implements OnInit {

  colorControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]);
  
  studentForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    contact: new FormGroup({
      mobile: new FormControl(''),
      landline: new FormControl('')
    })
  });

  user = { name: '', course: '', age: '', address: '' };

  num1 = 5;
  num2 = 5;


  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.colorControl);
  }

  changeName() {
    this.colorControl.setValue('asdfghj');
  }

  submitReactiveForm(){
    console.log(this.studentForm);
  }

  submitTemplateForm() {
    console.log('this.user :', this.user);
  }
}
