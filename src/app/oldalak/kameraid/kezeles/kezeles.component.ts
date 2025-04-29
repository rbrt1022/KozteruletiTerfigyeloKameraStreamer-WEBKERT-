import { Component, Input } from '@angular/core';
import { TerfigyeloKamera } from '../../../osztott/interfeszek/TerfigyeloKamera';
import { SzovegTisztitoPipe } from '../../../osztott/pipeok/szoveg-tisztito/szoveg-tisztito.pipe';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardFooter } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

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
  //@Input() kamerak!: TerfigyeloKamera[];
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
            feltolto: "bela"
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
            feltolto: "saníi"
        }
      ]
}
