import { Injectable, signal, computed } from '@angular/core';

export interface Article {
  slug: string;
  title: string;
  content: string;
  lastUpdated: string;
}

@Injectable({ providedIn: 'root' })
export class ContentService {
  private _articles = signal<Article[]>([
    {
      slug: 'introduccion',
      title: 'Introducción',
      content: `
        <p><strong>Fuentes Miami</strong> es una base de conocimiento estructurada tipo <em>Wikipedia</em> diseñada para centralizar documentación técnica, guías de referencia y mejores prácticas de desarrollo.</p>
        <p>La interfaz está dividida en dos paneles: a la izquierda el <em>indicador de temas</em> (sidebar de navegación) y a la derecha el contenido principal del artículo seleccionado.</p>
      `,
      lastUpdated: '2026-10-14',
    },
    {
      slug: 'historia',
      title: 'Historia',
      content: `
        <p>El proyecto nació como una iniciativa para crear una documentación viva, mantenible y escalable usando tecnologías web modernas.</p>
        <p>Inspirado en la simplicidad de Wikipedia y la potencia de Angular, <strong>Fuentes Miami</strong> combina lo mejor de ambos mundos: navegación lateral persistente y contenido enriquecido.</p>
      `,
      lastUpdated: '2026-10-13',
    },
    {
      slug: 'conceptos-fundamentales',
      title: 'Conceptos Fundamentales',
      content: `
        <h3>Standalone Components</h3>
        <p>Angular 22 usa componentes <code>standalone: true</code> por defecto, eliminando la necesidad de <code>NgModule</code>.</p>
        <h3>Signals</h3>
        <p>Reactividad fina con <code>signal()</code>, <code>computed()</code> y <code>effect()</code>.</p>
        <h3>Control Flow</h3>
        <p>Sintaxis nativa <code>@if</code>, <code>@for</code>, <code>@switch</code> en templates.</p>
      `,
      lastUpdated: '2026-10-12',
    },
    {
      slug: 'arquitectura',
      title: 'Arquitectura',
      content: `
        <h3>Estructura de Carpetas</h3>
        <ul>
          <li><strong>components/</strong> — UI reutilizable (Layout, Botones, Cards)</li>
          <li><strong>services/</strong> — Lógica de negocio y estado (Topics, Content, Auth)</li>
          <li><strong>styles/</strong> — CSS global, variables, utilidades</li>
          <li><strong>ui/</strong> — Vistas completas (Home, Article, Search)</li>
        </ul>
        <h3>Patrones</h3>
        <p>Inyección de dependencias, señales para estado local, servicios para estado compartido.</p>
      `,
      lastUpdated: '2026-10-11',
    },
    {
      slug: 'ejemplos-practicos',
      title: 'Ejemplos Prácticos',
      content: `
        <h3>Crear un Componente</h3>
        <pre><code>ng generate component components/ui/button</code></pre>
        <h3>Crear un Servicio</h3>
        <pre><code>ng generate service services/data</code></pre>
        <h3>Lazy Loading</h3>
        <p>En <code>app.routes.ts</code> usa <code>loadComponent</code> para cargar vistas bajo demanda.</p>
      `,
      lastUpdated: '2026-10-10',
    },
    {
      slug: 'referencias',
      title: 'Referencias',
      content: `
        <ul>
          <li><a href="https://angular.dev" target="_blank">Angular Documentation</a></li>
          <li><a href="https://rxjs.dev" target="_blank">RxJS Documentation</a></li>
          <li><a href="https://www.typescriptlang.org" target="_blank">TypeScript Handbook</a></li>
          <li><a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a></li>
        </ul>
      `,
      lastUpdated: '2026-10-09',
    },
  ]);

  readonly articles = this._articles.asReadonly();

  getArticle(slug: string) {
    return this._articles().find(a => a.slug === slug);
  }

  getAllSlugs() {
    return this._articles().map(a => a.slug);
  }
}