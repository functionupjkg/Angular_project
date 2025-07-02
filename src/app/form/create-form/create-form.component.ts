import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent {
  [x: string]: any;
  userForm: any;

  // This will store submitted records
  submittedDataList: any[] = [];

  isEditMode: boolean = false;
  editIndex: number = -1;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
    console.log('Form initialized:', this.userForm.value);
  }

  //onsubmit function----
  onSubmit(): void {
    debugger;
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
      const data = this.userForm.value;

      if (this.isEditMode) {
        this.submittedDataList[this.editIndex] = data;
        this.isEditMode = false;
        this.editIndex = -1;
      } else {
        this.submittedDataList.push(data);
      }

      this.userForm.reset();
    } else {
      this.userForm.markAllASTouched();
    }
  }
  //onRest function ------
  onReset(): void {
    this.userForm.reset();
    this.isEditMode = false;
    this.editIndex = -1;
  }

  submittedData() {}

  deleteRow(index: number) {
    this.submittedDataList.splice(index, 1);

    if (this.isEditMode && this.editIndex === index) {
      this.onReset();
    }
  }

  editRow(index: number) {
    const data = this.submittedDataList[index];
    this.userForm.patchValue(data);
    this.isEditMode = true;
    this.editIndex = index;
  }
}
