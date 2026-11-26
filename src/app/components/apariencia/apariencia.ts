import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-apariencia',
  styleUrl: './apariencia.css',
  templateUrl: './apariencia.html',
})

export class Apariencia {
  isContentVisible = true;

  toggleContent(): void {
    this.isContentVisible = !this.isContentVisible;
  }
}
