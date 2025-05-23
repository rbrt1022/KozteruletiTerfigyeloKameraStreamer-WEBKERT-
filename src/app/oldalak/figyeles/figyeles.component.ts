import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HibaoldalComponent } from '../hibaoldal/hibaoldal.component';
import { ColorService } from '../../osztott/service/szinek.service';
import { TemaService } from '../../osztott/service/temak.service';
import { CommonModule } from '@angular/common';
import { YtlinkPipe } from '../../osztott/pipeok/ytlink/ytlink.pipe';

@Component({
  selector: 'app-figyeles',
  imports: [
    HibaoldalComponent,
    CommonModule,
    YtlinkPipe
  ],
  templateUrl: './figyeles.component.html',
  styleUrl: './figyeles.component.scss'
})

export class FigyelesComponent implements OnInit {
  kameraTelepules = "";
  kameraHelyszin = "";
  kVan: boolean = false;

  aktualisTema: 'light' | 'dark' = 'light';
  aktualisSzin: 'kek' | 'zold' | 'piros' = 'kek';
  
  kameraForras: string= "";

  constructor(
    private colorService: ColorService,
    private temaService: TemaService) {}

  ngOnInit(): void {
    //Ezentúl a biztonságosságot a pipe adja
    //const storedValue = localStorage.getItem('kameralink');
    /*if (storedValue) {
      this.kameraForras = this.sanitizer.bypassSecurityTrustResourceUrl(storedValue);
      this.kVan = true;
    } else {
      this.kVan = false;
    }*/
    this.kameraForras = localStorage.getItem('kameralink')+"";
    if (this.kameraForras) {
      this.kVan = true;
    } else {
      this.kVan = false;
    }

    this.szinezesKiszervezve();
    this.temaKiszervezve();
  }

  temaKiszervezve(): void {
    let legyentema = localStorage.getItem('tema');
    console.log("Legyen ez a téma: "+ legyentema)

    if (legyentema === 'light') {
      this.aktualisTema = 'light';
    }
    else {
      this.aktualisTema = 'dark';
    }

    console.log('Ez lett az aktuális téma: '+ this.aktualisTema)
  }

  szinezesKiszervezve(): void {
    let legyenszin = localStorage.getItem('szin');

    if (legyenszin === 'zold') {
      this.colorService.setSzin('zold')
    }
    else if (legyenszin === 'piros') {
      this.colorService.setSzin('piros')
    }
    else {
      this.colorService.setSzin('kek')
    }

    this.colorService.szin$.subscribe(szin => {
      this.aktualisSzin = szin;
    });
  }
}
