import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Felhasznalo } from '../../osztott/interfeszek/Felhasznalo';
import { CommonModule } from '@angular/common';
import { TemaService } from '../../osztott/service/temak.service';

@Component({
  selector: 'app-regisztracio',
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
  templateUrl: './regisztracio.component.html',
  styleUrl: './regisztracio.component.scss'
})
export class RegisztracioComponent {

  regisztracioUrlap = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    jelszo: new FormControl('', [Validators.required, Validators.minLength(6)]),
    jelszoUjra: new FormControl('', [Validators.required]),
    felhasznalonev: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  aktualisTema: 'light' | 'dark' = 'dark';

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

  bejelentkezeshez()
  {
    this.router.navigateByUrl("/bej");
  }

  ujfioka()
  {
    const j = this.regisztracioUrlap.get('jelszo');
    const jU = this.regisztracioUrlap.get('jelszoUjra');

    if (j?.value !== jU?.value) {
      return;
    }

    const ujFh: Felhasznalo = {
      fhnev: String(this.regisztracioUrlap.value.felhasznalonev).trim() || '',
      email: this.regisztracioUrlap.value.email || '',
      jelszo: this.regisztracioUrlap.value.jelszo || ''
    };
  };
}
