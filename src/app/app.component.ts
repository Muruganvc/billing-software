import { Component, computed, HostListener, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatMenuModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, SideNavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  collapsed = signal(true);

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '260px');
  isMobile = false;
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }
onSignIn() {
  console.log('Sign In clicked');
  // Add your sign-in logic here
}

onSignOut() {
  console.log('Sign Out clicked');
  // Add your sign-out logic here
}
}

