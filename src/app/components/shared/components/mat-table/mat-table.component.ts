import { Component, Input, ViewChild, AfterViewInit, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mat-table',
  standalone: true,
 imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './mat-table.component.html',
  styleUrl: './mat-table.component.css'
})
export class MatTableComponent {
  
}
