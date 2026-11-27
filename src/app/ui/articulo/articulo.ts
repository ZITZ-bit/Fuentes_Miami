import { Component } from '@angular/core';

// Componentes

import { Navbar } from '../../components/navbar/navbar';
import { Contenido } from '../../components/contenido/contenido';
import { Apariencia } from '../../components/apariencia/apariencia';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.html',
  styleUrl: '../../styles/articulo.css',
  standalone: true,
  imports: [Navbar, Contenido, Apariencia],
})
export class articulo {}
