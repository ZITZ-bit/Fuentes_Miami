import { Injectable } from '@angular/core';

export interface Heading {
  id: string;
  level: number;
  text: string;
  children: Heading[];
}

@Injectable({ providedIn: 'root' })
export class TocService {
  extractHeadings(html: string): Heading[] {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const headingElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');

    const headings: Heading[] = [];
    const stack: { level: number; node: Heading }[] = [{ level: 0, node: { id: '', level: 0, text: '', children: headings } }];

    headingElements.forEach((el, index) => {
      const level = parseInt(el.tagName.charAt(1), 10);
      const text = el.textContent?.trim() || '';
      const id = el.id || `heading-${index}`;

      if (!el.id) {
        el.id = id;
      }

      const heading: Heading = { id, level, text, children: [] };

      while (stack.length > 1 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      const parent = stack[stack.length - 1].node;
      parent.children.push(heading);
      stack.push({ level, node: heading });
    });

    return this.updateHtmlWithIds(html, doc);
  }

  private updateHtmlWithIds(html: string, doc: Document): Heading[] {
    return this.extractHeadings(html);
  }

  getHeadingsWithIds(html: string): { html: string; headings: Heading[] } {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const headingElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');

    const headings: Heading[] = [];
    const stack: { level: number; node: Heading }[] = [{ level: 0, node: { id: '', level: 0, text: '', children: headings } }];

    headingElements.forEach((el, index) => {
      const level = parseInt(el.tagName.charAt(1), 10);
      const text = el.textContent?.trim() || '';
      const id = el.id || `heading-${index}`;

      if (!el.id) {
        el.id = id;
      }

      const heading: Heading = { id, level, text, children: [] };

      while (stack.length > 1 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      const parent = stack[stack.length - 1].node;
      parent.children.push(heading);
      stack.push({ level, node: heading });
    });

    return {
      html: doc.body.innerHTML,
      headings: headings,
    };
  }
}