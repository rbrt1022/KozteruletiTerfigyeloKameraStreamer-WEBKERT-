import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { TerfigyeloKamera } from '../../osztott/interfeszek/TerfigyeloKamera';
import { EgykameraComponent } from './egykamera/egykamera.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BetoltTComponent } from '../../osztott/toltokepernyok/betolt-t/betolt-t.component';
import { TemaService } from '../../osztott/service/temak.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kamerak',
  imports: [
    MatGridListModule,
    EgykameraComponent,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    BetoltTComponent,
    CommonModule
  ],
  templateUrl: './kamerak.component.html',
  styleUrl: './kamerak.component.scss'
})
export class KamerakComponent {
  varosok = new Set<String>();
  jelenVaros = "";
  kattintva: boolean = false;

  aktualisTema: 'light' | 'dark' = 'dark';
  
  constructor(private temaService:TemaService){}

  ngOnInit(): void {
    this.temaKiszervezve();

    this.kamerak.forEach(element => {
      this.varosok.add(element.telepules)
    });

    this.jelenVaros = "mind";
    this.kattintva = false;

    console.log(this.aktualisTema);
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

    console.log("Aktualis tema ez lett:", this.aktualisTema)
  }

  kamerak: TerfigyeloKamera[] = 
    [
      {
          id: 1,
          telepules: "Sarkad",
          hely: "Körforgalom - Anti út",
          link: "https://www.youtube.com/embed/gc58ZAuDmkk",
          feltolto: "rob"
      },
      {
          id: 2,
          telepules: "Békéscsaba",
          hely: "Szent István tér",
          link: "http://195.199.243.170:55600/ipcam/mjpeg.cgi?resolution=1920x1080",
          feltolto: "rob"
      },
      {
          id: 3,
          telepules: "Békéscsaba",
          hely: "Sétány",
          link: "http://mail.bekescsaba.hu:8080/axis-cgi/mjpg/video.cgi?resolution=1920x1080&compression=70&dummy=1743708496557",
          feltolto: "rob"
      },
      {
          id: 4,
          telepules: "Békéscsaba",
          hely: "Csabagyöngye",
          link: "http://195.199.243.170:55800/ipcam/mjpeg.cgi",
          feltolto: "rob"
      }
    ]

    

    ezakamerakell(link: string): void {
      this.kattintva = true;
      //console.log(link);
      localStorage.setItem('kameralink', link);

      setTimeout(() => {
        //this.router.navigateByUrl("/kezdo");
        window.location.href = "/figyeles";
      },3000)
    }

    
    varosszuro(valasztottVaros: string): void {
      this.jelenVaros = valasztottVaros;
    }
}
  

