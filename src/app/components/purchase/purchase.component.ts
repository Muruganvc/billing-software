import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: [''],
      email: [''],
      position: [''],
      department: ['']
    });
  }
  onSubmit(): void {
    console.log(this.employeeForm.value);
  }
}
