import { Component, inject, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { PurchaseDialogComponent } from './purchase-dialog/purchase-dialog.component';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-purchase',
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
    FormsModule, RouterModule
  ],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent {
  isMobile = false;
  //  router = inject(Router);
  displayedColumns: string[] = ['id', 'productName', 'productCompany', 'mrp', 'purchasePrice', 'quantity', 'actions'];
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

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private route: ActivatedRoute) { }

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
    this.router.navigate(['emp-attendance'], { relativeTo: this.route });
  }

}
