import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  private temaSubject = new BehaviorSubject<'light' | 'dark'>('dark');
  tema$ = this.temaSubject.asObservable();

  constructor() {}

  setTema(tema: 'light' | 'dark') {
    this.temaSubject.next(tema);
    localStorage.setItem('tema', tema);
  }
}
