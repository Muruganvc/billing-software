import { Routes } from '@angular/router';
import { PartiesComponent } from './components/parties/parties.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { SalesComponent } from './components/sales/sales.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeAttendanceComponent } from './components/employee-attendance/employee-attendance.component';

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
        component: PurchaseComponent
    },
    {
        path: 'sales',
        component: SalesComponent
    },
    {
        path:'emp-attendance',
        component:EmployeeAttendanceComponent
    }
];