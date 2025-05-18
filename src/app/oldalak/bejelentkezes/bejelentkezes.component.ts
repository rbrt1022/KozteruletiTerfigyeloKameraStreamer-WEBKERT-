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
import { FelhasznaloAzonositasService } from '../../osztott/service/felhasznalo-azonositas.service';
import { Subscription } from 'rxjs';


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

  email = new FormControl('');
  jelszo = new FormControl('');
  bejelentkezve: boolean = false;

  bejHiba = "";

  private fha?: Subscription
 
   constructor(
    private router : Router,
    private temaService: TemaService,
    private fh: FelhasznaloAzonositasService,
  ){};
 
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
    const e = this.email.value;
    const j = this.jelszo.value;

    this.fh.bejelentkez(String(e),String(j))
    .then(userCredential => {
      this.fh.frissitBejelentkezesiStatus(true);
      //this.router.navigateByUrl('/kezdo');
      window.location.href = "/kezdo";
    })
    .catch(error => {
      console.error('Login error:', error);
      //this.isLoading = false;
      //this.showLoginForm = true;
      
      switch(error.code) {
        default:
          this.bejHiba = 'Nem sikerült a bejelentkezés.';
      }
    });
  }

  ngOnDestroy() {
    this.email.reset();
    this.jelszo.reset();
  }
  
}
