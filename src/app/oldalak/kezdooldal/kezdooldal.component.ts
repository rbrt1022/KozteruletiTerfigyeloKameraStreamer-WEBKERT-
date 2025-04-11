import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { TemaComponent } from "./tema/tema.component";
import { TemaService } from '../../osztott/service/temak.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kezdooldal',
  imports: [
    MatButtonModule,
    MatTabsModule,
    TemaComponent,
    CommonModule
],
  templateUrl: './kezdooldal.component.html',
  styleUrl: './kezdooldal.component.scss'
})
export class KezdooldalComponent {
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

  

  oldaltmodosits(){
    this.router.navigateByUrl("/leskelodes");
  }

  valtsTemat() {
    console.log("Váltok?")
    if (this.aktualisTema === 'dark') {
      console.log("Sötét volt, világos van.")
      this.temaService.setTema('light'); 
    }
    else{
      this.temaService.setTema('dark'); 
      console.log("Világos volt, sötét van.")
    }
  }

  
}
