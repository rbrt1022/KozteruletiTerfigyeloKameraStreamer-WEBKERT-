import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private szinSubject = new BehaviorSubject<'kek' | 'zold' | 'piros'>('kek');
  szin$ = this.szinSubject.asObservable();

  constructor() {}

  setSzin(szin: 'kek' | 'zold' | 'piros') {
    this.szinSubject.next(szin);
    localStorage.setItem('szin', szin);
  }
}
