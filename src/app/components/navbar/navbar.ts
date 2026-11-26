import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { phosphorList, phosphorMagnifyingGlass } from '@ng-icons/phosphor-icons/regular';

@Component({
  imports: [NgIcon],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly menuIcon = phosphorList;
  readonly searchIcon = phosphorMagnifyingGlass;
}
