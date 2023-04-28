import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navlist=['Home', 'About Us', 'Services', 'Our Teams',]
  isMenuHidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}
