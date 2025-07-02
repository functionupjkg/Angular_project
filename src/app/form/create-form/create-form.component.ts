import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})




export class CreateFormComponent {
[x: string]: any;
  userForm: any

    // This will store submitted records
    submittedDataList: any[] = [];

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobile:['', Validators.required],
    })
    console.log('Form initialized:', this.userForm.value);
  }

//onsubmit function----
  onSubmit():void {
    debugger;
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);

      const data = this.userForm.value
      this.submittedDataList.push(data)
      this.userForm.reset()
    }
    else {
      this.userForm.markAllASTouched();
    }
  }
 //onRest function ------
  onReset(): void {
    this.userForm.reset();
  }


  submittedData() {

  }
}
