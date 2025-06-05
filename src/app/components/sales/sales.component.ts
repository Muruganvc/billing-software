import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { MatTableDataSource } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    FormsModule,RouterModule
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
   isMobile = false;

  displayedColumns: string[] = ['id', 'productName', 'productCompany', 'mrp', 'purchasePrice','quantity','actions'];
  dataSource = new MatTableDataSource<any>([
    {
      id: 1,
      title: 'Title One',
      body: 'This is the description for item one.',
      userId: 101
    },
    {
      id: 2,
      title: 'Title Two',
      body: 'This is the description for item two.',
      userId: 102
    },
    {
      id: 3,
      title: 'Title Three',
      body: 'This is the description for item three.',
      userId: 103
    },
    {
      id: 4,
      title: 'Title One',
      body: 'This is the description for item one.',
      userId: 101
    },
    {
      id: 5,
      title: 'Title Two',
      body: 'This is the description for item two.',
      userId: 102
    },
    {
      id: 6,
      title: 'Title Three',
      body: 'This is the description for item three.',
      userId: 103
    },
    {
      id: 7,
      title: 'Title One',
      body: 'This is the description for item one.',
      userId: 101
    },
    {
      id: 8,
      title: 'Title Two',
      body: 'This is the description for item two.',
      userId: 102
    },
    {
      id: 9,
      title: 'Title Three',
      body: 'This is the description for item three.',
      userId: 103
    },
    {
      id: 10,
      title: 'Title One',
      body: 'This is the description for item one.',
      userId: 101
    }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
onNewClick() {
  console.log('New button clicked');
  // Add your creation logic or navigation here
}
}
