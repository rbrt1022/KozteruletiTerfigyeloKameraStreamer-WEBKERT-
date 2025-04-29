import { Component } from '@angular/core';
import { KezelesComponent } from "./kezeles/kezeles.component";
import { HozzaadComponent } from "./hozzaad/hozzaad.component";
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { TemaService } from '../../osztott/service/temak.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TerfigyeloKamera } from '../../osztott/interfeszek/TerfigyeloKamera';

@Component({
  selector: 'app-kameraid',
  imports: [
    KezelesComponent,
    HozzaadComponent,
    MatTab,
    MatTabGroup,
    CommonModule
  ],
  templateUrl: './kameraid.component.html',
  styleUrl: './kameraid.component.scss'
})
export class KameraidComponent {
  aktualisTema: 'light' | 'dark' = 'dark';

  
  
    constructor(private router : Router, private temaService: TemaService){}
  
    ngOnInit(){
      this.temaKiszervezve();
    }
  
    temaKiszervezve(): void {
      let legyentema = localStorage.getItem('tema');
  
      if (legyentema === 'light') {
        this.temaService.setTema('light')
      }
      else {
        this.temaService.setTema('dark')
      }
  
      this.temaService.tema$.subscribe(tema => {
        this.aktualisTema = tema;
      });
    }
}
