import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TemaService } from '../../osztott/service/temak.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kamerahozzaad',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './kamerahozzaad.component.html',
  styleUrl: './kamerahozzaad.component.scss'
})
export class KamerahozzaadComponent {
  telepules = new FormControl('');
  helyszin = new FormControl('');

  aktualisTema: 'light' | 'dark' = 'dark';

  constructor(private temaService: TemaService){}
  
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

  ujKameraLathataron(){
    console.log("Hwllo");
  }
}
