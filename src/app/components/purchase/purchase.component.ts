import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { PurchaseDialogComponent } from './purchase-dialog/purchase-dialog.component';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule, MatDialogModule, LayoutModule,
  ],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent {

  dialog = inject(MatDialog);
  breakpointObserver = inject(BreakpointObserver);

  openProductDialog() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.dialog.open(PurchaseDialogComponent, {
        width: result.matches ? '90vw' : '400px',
        maxWidth: '95vw',
      });
    });
  }

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
  onExtraClick() {
    console.log('Extra button clicked!');
    // Add your logic here
  }

}
