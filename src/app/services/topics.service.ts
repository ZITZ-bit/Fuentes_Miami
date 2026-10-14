import { Injectable, signal, computed } from '@angular/core';

export interface Topic {
  id: string;
  title: string;
  slug: string;
}

@Injectable({ providedIn: 'root' })
export class TopicsService {
  private _topics = signal<Topic[]>([
    { id: '1', title: 'Introducción', slug: 'introduccion' },
    { id: '2', title: 'Historia', slug: 'historia' },
    { id: '3', title: 'Conceptos Fundamentales', slug: 'conceptos-fundamentales' },
    { id: '4', title: 'Arquitectura', slug: 'arquitectura' },
    { id: '5', title: 'Ejemplos Prácticos', slug: 'ejemplos-practicos' },
    { id: '6', title: 'Referencias', slug: 'referencias' },
  ]);

  readonly topics = this._topics.asReadonly();
  readonly topicTitles = computed(() => this._topics().map(t => t.title));

  addTopic(topic: Omit<Topic, 'id'>) {
    const newTopic: Topic = { ...topic, id: crypto.randomUUID() };
    this._topics.update(arr => [...arr, newTopic]);
  }

  removeTopic(id: string) {
    this._topics.update(arr => arr.filter(t => t.id !== id));
  }
}