import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,MatCardModule,MatButtonModule,MatIconModule
  ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  back() {
    this.router.navigate(['/products']);
  }
  form = this.fb.group({
    productName: [''],
    productCompany: [''],
    maximumRetailPrice: [''],
    purchasePrice: [''],
    quantity: [''],
    availQuantity:[]
  });

  constructor(private router: Router, private fb: FormBuilder) { }
  onSubmit(){}
  onCancel(){}
}
