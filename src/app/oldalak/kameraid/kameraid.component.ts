import { Component } from '@angular/core';
import { KezelesComponent } from "./kezeles/kezeles.component";
import { HozzaadComponent } from "./hozzaad/hozzaad.component";
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { TemaService } from '../../osztott/service/temak.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FelhasznaloAzonositasService } from '../../osztott/service/felhasznalo-azonositas.service';
import { TerigyeloKameraService } from '../../osztott/service/terfigyelo-kamera.service';
import { TerfigyeloKamera } from '../../osztott/interfeszek/TerfigyeloKamera';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BetoltTComponent } from '../../osztott/toltokepernyok/betolt-t/betolt-t.component';


@Component({
  selector: 'app-kameraid',
  imports: [
  KezelesComponent,
  HozzaadComponent,
  MatTab,
  MatTabGroup,
  CommonModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatProgressSpinnerModule,
  ReactiveFormsModule,
  FormsModule,
  BetoltTComponent
  ],
  templateUrl: './kameraid.component.html',
  styleUrl: './kameraid.component.scss'
})
export class KameraidComponent {
  aktualisTema: 'light' | 'dark' = 'dark';

  szrkmode: boolean = false;

  kamerak: TerfigyeloKamera[] = [];
  telepules = new FormControl('');
  helyszin = new FormControl('');
  ujlink = new FormControl('');
  kamid = new FormControl('');
  uid = new FormControl('');

  tolt: boolean = false;
  
    constructor(
      private router : Router,
      private temaService: TemaService,
      private fh: FelhasznaloAzonositasService,
      private tk: TerigyeloKameraService
      
    ){}
  
    ngOnInit(){
      this.temaKiszervezve();
      this.kameralekeres();
      this.kamid.setValue("CSORRRROO!")
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

    kameralekeres(): void {
      this.tolt = true;
      this.tk.sajatkleker().subscribe(kamerak => {
        this.kamerak = kamerak;
        kamerak.forEach(k => {
          console.log(k);
          if(k.telepules == null || k.telepules == "" || k.telepules == " "){
          k.telepules = "Ismeretlen";
          console.log("Ismeretlen lettem.");
        }
        });
      });
      this.tolt = false
    }

    kameraTorlesKezelese(kameraId: string): void {
      this.tk.torlesKamera(kameraId);
    }

    kamera: Partial<TerfigyeloKamera> = {};

    kameraSzerkKezelese(id: string): void {
      console.log("Szulo megkapta")
      this.kamid.setValue(id);
      this.helyszin.setValue("");
      this.telepules.setValue("");
      this.ujlink.setValue("");
      this.szrkmode = true;
    }

    kameraModosit(kameraId: string|null): void{
      this.tolt = true;
      this.kamera = {
        telepules: this.telepules.value + "",
        hely: this.helyszin.value + "",
        link: this.ujlink.value + ""
      }
      console.log(this.kamera)
      this.tk.szerkesztKamera(this.kamid.value+"", this.kamera).then(a => {
        this.szrkmode = false;
        this.tolt = false;  
      });
    }

    ngOnDestroy(){
    //this.formControl.reset();
    this.telepules.reset();
    this.helyszin.reset();
    this.ujlink.reset();
  }
}
