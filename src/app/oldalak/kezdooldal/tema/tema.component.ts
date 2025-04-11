import { Component ,Output,EventEmitter} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { ColorService } from '../../../osztott/service/szinek.service';
import { FormsModule } from '@angular/forms';
import { TemaService } from '../../../osztott/service/temak.service';

@Component({
  selector: 'app-tema',
  imports: [
    MatSlideToggleModule,
    MatRadioModule,
    FormsModule
  ],
  templateUrl: './tema.component.html',
  styleUrl: './tema.component.scss'
})

export class TemaComponent {
  @Output() temaValtozas = new EventEmitter<'light' | 'dark'>();

  temaValt(aktiv: boolean) {
    this.temaValtozas.emit(aktiv ? 'dark' : 'light');
  }

  aktualisSzin: 'kek' | 'zold' | 'piros' = 'kek'; 
  aktualisTema: 'light' | 'dark' = 'dark';
  aktiv: boolean = false;

  constructor(private colorService: ColorService, private temaService: TemaService) {}

  ngOnInit(){
    this.szinezesKiszervezve();
    this.temaKiszervezve();
  }

  //Itt csak a csuszka van kezelve, a téma az a szülőben.
  temaKiszervezve(): void {
    let legyentema = localStorage.getItem('tema');

    if (legyentema === 'light') {
      this.aktiv = true;
    }
    else {
      this.aktiv = false;
    }

    this.temaService.tema$.subscribe(tema => {
      this.aktualisTema = tema;
    });
  }

  szinezesKiszervezve(): void {
    let legyenszin = localStorage.getItem('szin');

    if (legyenszin === 'zold') {
      this.colorService.setSzin('zold')
    }
    else if (legyenszin === 'piros') {
      this.colorService.setSzin('piros')
    }
    else {
      this.colorService.setSzin('kek')
    }

    this.colorService.szin$.subscribe(szin => {
      this.aktualisSzin = szin;
    });
  }

  szinValtoztat(szin: string): void {
    this.colorService.setSzin(szin as 'kek' | 'zold' | 'piros');  // A kiválasztott szín beállítása
  }
}
