import { Routes } from '@angular/router';
import { authGuard, publicGuard } from './osztott/orzo/fhbelepve.guard';


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
        path: 'sajatkamera',
        loadComponent: () => import('./oldalak/kameraid/kameraid.component').then(m => m.KameraidComponent),
        canActivate:[authGuard]
    },
    {
        path: 'bej',
        loadComponent: () => import('./oldalak/bejelentkezes/bejelentkezes.component').then(m => m.BejelentkezesComponent),
        canActivate:[publicGuard]
    },
    {
        path: 'reg',
        loadComponent: () => import('./oldalak/regisztracio/regisztracio.component').then(m => m.RegisztracioComponent),
        canActivate:[publicGuard]
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
