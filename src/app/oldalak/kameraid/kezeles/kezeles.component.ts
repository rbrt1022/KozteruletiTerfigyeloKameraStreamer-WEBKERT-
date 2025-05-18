import { Component, Input } from '@angular/core';
import { TerfigyeloKamera } from '../../../osztott/interfeszek/TerfigyeloKamera';
import { SzovegTisztitoPipe } from '../../../osztott/pipeok/szoveg-tisztito/szoveg-tisztito.pipe';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardFooter } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-kezeles',
  imports: [SzovegTisztitoPipe,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCardFooter,
    MatIcon
  ],
  templateUrl: './kezeles.component.html',
  styleUrl: './kezeles.component.scss'
})
export class KezelesComponent {
  @Input() kamerak: TerfigyeloKamera[] = [];
  @Output() kameraTorlese = new EventEmitter<string>();
  @Output() kameraSzerkeszt = new EventEmitter<string>();

  ngOnInit(){
    console.log("---------------------")
    this.kamerak.forEach(k => console.log(k))
  }

  torles(kameraId: string): void {
    this.kameraTorlese.emit(kameraId);
  }

  szerk(kameraId: string): void{
    this.kameraSzerkeszt.emit(kameraId);
    //console.log("Szerkgomb")
  }
}
