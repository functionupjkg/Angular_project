import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})




export class CreateFormComponent {
  userForm: any

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobile:['', Validators.required]

    })
  }

//onsubmit function----
  onSubmit() : void {
    if (this.userForm.Valid) {
      console.log(this.userForm.value)

      const payload = this.userForm.value
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
}
