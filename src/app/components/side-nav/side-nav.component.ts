import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from "../menu-item/menu-item.component";


export type menuItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: menuItem[];
}

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterModule, MenuItemComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  sidenavCollapsed = signal(false)
  @Input() set collapsed(val: boolean) {
    this.sidenavCollapsed.set(val);
  }

  profilePicSize = computed(() => this.sidenavCollapsed() ? '32' : '100');

  menuItems = signal<menuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'date_range',
      label: 'Employee Attendance',
      route: 'emp-attendance'
    },
    {
      icon: 'date_range',
      label: 'Product',
      route: 'products'
    },
    {
      icon: 'face',
      label: 'Parties',
      route: 'parties',
      subItems: [
        {
          icon: 'add_shopping_cart',
          label: 'Purchase',
          route: 'purchase'
        },
        {
          icon: 'remove_shopping_cart',
          label: 'Sales',
          route: 'sales',
        }
      ]
    },
    {
      icon: 'add_shopping_cart',
      label: 'Purchase',
      route: 'purchase'
    },
    {
      icon: 'remove_shopping_cart',
      label: 'Sales',
      route: 'sales',
    }
  ]);
}
