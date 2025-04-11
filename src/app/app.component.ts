import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OldalmenuComponent } from './osztott/oldalmenu/oldalmenu.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { RouterLink } from '@angular/router';
import { ColorService } from './osztott/service/szinek.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    OldalmenuComponent,
    MatSidenav,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'kozterulet';
  //Tesztnek
  bejelentkezve = false;
  kijfolyamatban = false;

  aktualisSzin: 'kek' | 'zold' | 'piros' = 'kek';

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.bevanejelentkezve();
    this.szinezesKiszervezve();
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

  bevanejelentkezve(): void {
    this.bejelentkezve = localStorage.getItem('bejelentkezve') === 'true';
  }
  
  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }

  kij(){
    this.kijfolyamatban = true;
    localStorage.setItem('bejelentkezve','false');

    setTimeout(() => {
      window.location.href = "/kezdo";
    },3000)
  }
}
