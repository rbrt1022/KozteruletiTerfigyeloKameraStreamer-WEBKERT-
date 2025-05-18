import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { FelhasznaloAzonositasService } from '../service/felhasznalo-azonositas.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(FelhasznaloAzonositasService);
  
  return authService.bejelentkezettFelhasznalo.pipe(
    take(1),
    map(felhasznalo => {
      if (felhasznalo) {
        return true;
      }
      
      console.log('Nem vagy bejelentkezve tetyám!');
      router.navigate(['/bej']);
      return false;
    })
  );
};

export const publicGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(FelhasznaloAzonositasService);
  
  return authService.bejelentkezettFelhasznalo.pipe(
    take(1),
    map(felhasznalo => {
      if (!felhasznalo) {
        return true;
      }
      
      console.log('Beléptél már.');
      router.navigate(['/kezdo']);
      return false;
    })
  );
};