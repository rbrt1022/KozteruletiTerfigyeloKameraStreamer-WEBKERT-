import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list'
import { MatIcon } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { ColorService } from '../service/szinek.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oldalmenu',
  imports: [
    RouterLink,
    RouterLinkActive, 
    MatListModule,
    MatIcon,
    CommonModule
  ],
  templateUrl: './oldalmenu.component.html',
  styleUrl: './oldalmenu.component.scss'
})

export class OldalmenuComponent {
  @Input() sidenav!: MatSidenav;

  aktualisSzin: 'kek' | 'zold' | 'piros' = 'kek';

  constructor(private colorService: ColorService) {}

  bejelentkezve = false;

  ngOnInit(): void {
    this.bevanejelentkezve();
  }

  bevanejelentkezve(): void {
    this.bejelentkezve = localStorage.getItem('bejelentkezve') === 'true';
  }

  kij(){
    localStorage.setItem('bejelentkezve','false');

    this.closeMenu();

    setTimeout(() => {
      //this.router.navigateByUrl("/kezdo");
      window.location.href = "/kezdo";
    },3000)
  }

  closeMenu() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }
}
