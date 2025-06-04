import { Component, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { animate, style, transition, trigger } from '@angular/animations';

import { menuItem } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [MatIconModule, MatListModule, RouterModule, MatTooltipModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0, height: '0px' }),
        animate('500ms ease-in-out', style({ opacity: 1, height: '*' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0, height: '0px' }))
      ])
    ])
  ]
})
export class MenuItemComponent {
  item = input.required<menuItem>();
  collapsed = input(false);

  nestedMenuOpen = signal(false);

  toggleNested(): void {
    if (!this.item().subItems) return;
    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }
}
