import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,MatTableModule,
    MatInputModule,MatPaginatorModule,
    MatSelectModule,MatSortModule,
    MatOptionModule, MatCardModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  goToNewProduct() {
    this.router.navigate(['/products/new']);
  }
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

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private route: ActivatedRoute) { 
        this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
   }

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
