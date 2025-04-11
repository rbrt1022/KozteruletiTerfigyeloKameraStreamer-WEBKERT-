import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { TerfigyeloKamera } from '../../../osztott/interfeszek/TerfigyeloKamera';
import { SzovegTisztitoPipe } from '../../../osztott/pipeok/szoveg-tisztito/szoveg-tisztito.pipe';

@Component({
  selector: 'app-egykamera',
  imports: [MatCardModule,SzovegTisztitoPipe],
  templateUrl: './egykamera.component.html',
  styleUrl: './egykamera.component.scss'
})

export class EgykameraComponent {
  @Input() kamera!: TerfigyeloKamera;
  @Output() kivalasztva = new EventEmitter<string>();

  kattintas() {
    this.kivalasztva.emit(this.kamera.link);
  }
}
