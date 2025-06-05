import { Routes } from '@angular/router';
import { PartiesComponent } from './components/parties/parties.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { SalesComponent } from './components/sales/sales.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeAttendanceComponent } from './components/employee-attendance/employee-attendance.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NewProductComponent } from './components/product-list/new-product/new-product.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'parties',
        component: PartiesComponent
    },
    {
        path: 'purchase',
        component: PurchaseComponent,
        children: [
            {
                path: 'emp-attendance',
                component: EmployeeAttendanceComponent
            }
        ]
    },
    {
        path: 'sales',
        component: SalesComponent
    },
    {
        path: 'emp-attendance',
        component: EmployeeAttendanceComponent
    },
    {
        path: 'products',
        component: ProductListComponent,
    },
    {
        path: 'new',
        component: NewProductComponent,
    },
    { path: 'products/new', component: NewProductComponent },
];