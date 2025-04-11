import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemaService } from '../../osztott/service/temak.service';


@Component({
  selector: 'app-bejelentkezes',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './bejelentkezes.component.html',
  styleUrl: './bejelentkezes.component.scss'
})

export class BejelentkezesComponent {
  aktualisTema: 'light' | 'dark' = 'dark';

  felhasznalonev = new FormControl('');
  jelszo = new FormControl('');
  bejelentkezve: boolean = false;
 
   constructor(private router : Router, private temaService: TemaService){};
 
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

  regisztraljaCsorro(){
    this.router.navigateByUrl("/reg");
  }

  bejelentkezes(){

    if (this.felhasznalonev.value === 'rob' && this.jelszo.value === 'valami') {
      localStorage.setItem("bejelentkezve","true");
    }
    //window.location.href = "/kezdo";
    //this.router.navigateByUrl("/kezdo");

    setTimeout(() => {
      //this.router.navigateByUrl("/kezdo");
      window.location.href = "/kezdo";
    },3000)
  }
}
