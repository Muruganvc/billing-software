import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card'; 
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule 
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
constructor(private router: Router) {}

  isMobile = false;
  displayedColumns = ['id', 'productName', 'productCompany', 'mrp', 'purchasePrice', 'quantity', 'actions'];
  dataSource = {
    filteredData: [
      { id: 1, title: 'Product A', body: 'Company A', userId: 10 },
      { id: 2, title: 'Product B', body: 'Company B', userId: 20 },
    ],
  };

  applyFilter(event: Event) {
    // Optional: filtering logic
  }

  onNewClick() {
    this.router.navigate(['/products/new']);
  }
}
