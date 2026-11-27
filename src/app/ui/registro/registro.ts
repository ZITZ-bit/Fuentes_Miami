import { Component } from '@angular/core';

// Componentes

import { Navbar } from '../../components/navbar/navbar';
import { Apariencia } from '../../components/apariencia/apariencia';

@Component({
  selector: 'app-registro',
  styleUrl: '../../styles/registro.css',
  templateUrl: './registro.html',
  standalone: true,
  imports: [Navbar, Apariencia],
})
export class Registro {}
