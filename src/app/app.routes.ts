import { Routes } from '@angular/router';
import { KezdooldalComponent } from './oldalak/kezdooldal/kezdooldal.component';
import { HibaoldalComponent } from './oldalak/hibaoldal/hibaoldal.component';
import { KamerakComponent } from './oldalak/kamerak/kamerak.component';
import { BejelentkezesComponent } from './oldalak/bejelentkezes/bejelentkezes.component';
import { RegisztracioComponent } from './oldalak/regisztracio/regisztracio.component';
import { KamerahozzaadComponent } from './oldalak/kamerahozzaad/kamerahozzaad.component';


export const routes: Routes = [
    {
        path: 'kezdo',
        loadComponent: () => import('./oldalak/kezdooldal/kezdooldal.component').then(m => m.KezdooldalComponent)
    },
    {
        path: 'leskelodes',
        loadComponent: () => import('./oldalak/kamerak/kamerak.component').then(m => m.KamerakComponent)
    },
    {
        path: 'ujkamera',
        loadComponent: () => import('./oldalak/kamerahozzaad/kamerahozzaad.component').then(m => m.KamerahozzaadComponent)
    },
    {
        path: 'bej',
        loadComponent: () => import('./oldalak/bejelentkezes/bejelentkezes.component').then(m => m.BejelentkezesComponent)
    },
    {
        path: 'reg',
        loadComponent: () => import('./oldalak/regisztracio/regisztracio.component').then(m => m.RegisztracioComponent)
    },
    {
        path: 'figyeles',
        loadComponent: () => import('./oldalak/figyeles/figyeles.component').then(m => m.FigyelesComponent)
    },
    {
        path: '',
        redirectTo: 'kezdo',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadComponent: () => import('./oldalak/hibaoldal/hibaoldal.component').then(m => m.HibaoldalComponent)
    }    
];
