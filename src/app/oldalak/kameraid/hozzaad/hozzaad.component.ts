import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
  templateUrl: './hozzaad.component.html',
  styleUrl: './hozzaad.component.scss'
})
export class HozzaadComponent {
  telepules = new FormControl('');
  helyszin = new FormControl('');
  link = new FormControl('');

  ujKameraLathataron(): void
  {
    console.log(this.telepules.value, this.helyszin.value, this.link.value)
  }
}
