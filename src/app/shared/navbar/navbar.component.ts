import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuOpen = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {

  const target = event.target as HTMLElement;
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  
  if (this.menuOpen && 
      !navLinks?.contains(target) && 
      !hamburger?.contains(target)) {
    this.closeMenu();
  }
}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
