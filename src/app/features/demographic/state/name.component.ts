import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {


  nameForm: FormGroup;
  @Output() nameFormChanges = new EventEmitter();


  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.initializeForm();
    this.nameForm.valueChanges.subscribe(form => {
      this.emitChanges();
    })
  }

  emitChanges() {
    this.nameFormChanges.emit(this.nameForm.value);
  }


  initializeForm() {
    this.nameForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      suffix: ['', Validators.required],
      middleName: '',
      ssn: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      citizenship: ['', Validators.required]
    });

  }

  get firstName() {
    return this.nameForm.get("firstName");
  }

  get lastName() {
    return this.nameForm.get("lastName");
  }


}
