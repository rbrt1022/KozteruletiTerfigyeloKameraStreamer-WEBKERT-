import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TemaService } from '../../service/temak.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-betolt-t',
  imports: [
    MatProgressSpinnerModule,
    CommonModule
  ],
  templateUrl: './betolt-t.component.html',
  styleUrl: './betolt-t.component.scss'
})

export class BetoltTComponent {
  aktualisTema: 'light' | 'dark' = 'dark';

  ngOnInit(){
    this.temaKiszervezve();
  }

  constructor(
    private temaService: TemaService
  ){}

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
}
