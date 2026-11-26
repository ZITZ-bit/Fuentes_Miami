import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contenido',
  styleUrl: './contenido.css',
  templateUrl: './contenido.html',
})

export class Contenido {
  isContentVisible = true;

  toggleContent(): void {
    this.isContentVisible = !this.isContentVisible;
  }
}
