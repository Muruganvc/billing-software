import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-purchase-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './purchase-dialog.component.html',
  styleUrl: './purchase-dialog.component.css'
})
export class PurchaseDialogComponent {
  fb = inject(FormBuilder);
  dialogRef = inject(MatDialogRef<PurchaseDialogComponent>);

  productForm = this.fb.group({
    name: ['', Validators.required],
    company: ['', Validators.required],
    mrp: ['', Validators.required],
    purchasePrice: ['', Validators.required],
    quantity: ['', Validators.required],
  });

    onSubmit() {
    if (this.productForm.valid) {
      this.dialogRef.close(this.productForm.value);
    }
  }

}
