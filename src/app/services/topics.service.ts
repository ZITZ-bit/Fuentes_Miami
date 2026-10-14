import { Injectable, signal, computed } from '@angular/core';

export interface Topic {
  id: string;
  title: string;
  slug: string;
  icon: string;
}

@Injectable({ providedIn: 'root' })
export class TopicsService {
  private _topics = signal<Topic[]>([
    { id: '1', title: 'Introducción', slug: 'introduccion', icon: 'phosphorBookOpen' },
    { id: '2', title: 'Historia', slug: 'historia', icon: 'phosphorClock' },
    { id: '3', title: 'Conceptos Fundamentales', slug: 'conceptos-fundamentales', icon: 'phosphorCube' },
    { id: '4', title: 'Arquitectura', slug: 'arquitectura', icon: 'phosphorGear' },
    { id: '5', title: 'Ejemplos Prácticos', slug: 'ejemplos-practicos', icon: 'phosphorLightning' },
    { id: '6', title: 'Referencias', slug: 'referencias', icon: 'phosphorBook' },
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