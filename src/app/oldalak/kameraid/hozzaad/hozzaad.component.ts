import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//import { TerfigyeloKamera } from '../../../osztott/interfeszek/TerfigyeloKamera';
import { Auth } from '@angular/fire/auth';
import { TerigyeloKameraService } from '../../../osztott/service/terfigyelo-kamera.service';


@Component({
  selector: 'app-hozzaad',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule
  ],
  standalone: true,
  templateUrl: './hozzaad.component.html',
  styleUrl: './hozzaad.component.scss'
})
export class HozzaadComponent {
  //@Output() kameraFeltoltve = new EventEmitter<TerfigyeloKamera>();

  constructor(
    private kameraService: TerigyeloKameraService,
    private auth: Auth
  ) {}

  telepules = new FormControl('');
  helyszin = new FormControl('');
  link = new FormControl('');

  ujKameraLathataron(): void {
    if (this.telepules.invalid || this.helyszin.invalid || this.link.invalid) return;

    if (!this.auth.currentUser)
    {
      console.error("Nincs bejelentkezve felhasználó.");
      return;
    }
    else{
      console.log("UID:", this.auth.currentUser.uid);
    }


    const kamera = {
      telepules: this.telepules.value!,
      hely: this.helyszin.value!,
      link: this.link.value!,
      feltolto: this.auth.currentUser?.uid ?? 'ismeretlen'
    };

    this.kameraService.ujKamera(kamera)
      .then(() => {
        //this.kameraFeltoltve.emit(kamera);  // 🔔 értesítjük a szülőt
        this.telepules.reset();
        this.helyszin.reset();
        this.link.reset();
      })
      .catch(err => {
        console.error('Nem sikerült elmenteni a kamerát:', err);
      });
  }

  ngOnDestroy(){
    //this.formControl.reset();
    this.telepules.reset();
    this.helyszin.reset();
    this.link.reset();
  }
}
