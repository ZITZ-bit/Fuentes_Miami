import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

import { NgIcon } from '@ng-icons/core';
import {
  phosphorArrowLeft,
  phosphorList,
  phosphorMagnifyingGlass,
} from '@ng-icons/phosphor-icons/regular';

@Component({
  imports: [NgIcon, RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})

export class Navbar {
  readonly menuIcon = phosphorList;
  readonly searchIcon = phosphorMagnifyingGlass;
  readonly backIcon = phosphorArrowLeft;

  private router = inject(Router);

  get showSearch(): boolean {
    return !this.isAuthPage;
  }

  get showBackToHome(): boolean {
    return this.isAuthPage;
  }

  private get isAuthPage(): boolean {
    return ['/registro', '/iniciar-sesion'].includes(this.router.url);
  }
}