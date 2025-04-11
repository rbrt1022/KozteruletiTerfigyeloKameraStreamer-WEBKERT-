import { Component } from '@angular/core';
import { ColorService } from '../../osztott/service/szinek.service';
import { CommonModule } from '@angular/common';
import { TemaService } from '../../osztott/service/temak.service';

@Component({
  selector: 'app-hibaoldal',
  imports: [
    CommonModule
  ],
  templateUrl: './hibaoldal.component.html',
  styleUrl: './hibaoldal.component.scss'
})
export class HibaoldalComponent {
  aktualisTema: 'light' | 'dark' = 'dark';
  aktualisSzin: 'kek' | 'zold' | 'piros' = 'kek'

  constructor(private colorService: ColorService, private temaService: TemaService) {}
  
    ngOnInit(){
      this.szinezesKiszervezve();
      this.temaKiszervezve();
    }
  
    temaKiszervezve(): void {
      let legyentema = localStorage.getItem('tema');
  
      if (legyentema === 'light') {
        this.aktualisTema = 'light';
      }
      else {
        this.aktualisTema = 'dark';
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
}
