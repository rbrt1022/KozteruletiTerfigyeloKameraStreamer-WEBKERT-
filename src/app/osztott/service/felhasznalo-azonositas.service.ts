import { Injectable } from '@angular/core';
import { 
  Auth, 
  signInWithEmailAndPassword,
  signOut,
  authState,
  User,
  UserCredential,
  createUserWithEmailAndPassword
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Firestore, doc, setDoc, collection } from '@angular/fire/firestore';
import { Felhasznalo } from '../interfeszek/Felhasznalo';


@Injectable({
  providedIn: 'root'
})
export class FelhasznaloAzonositasService {
  bejelentkezettFelhasznalo: Observable<User | null>;

  constructor(
  private auth: Auth,
  private router: Router,
  private firestore: Firestore
  ) {
    this.bejelentkezettFelhasznalo = authState(this.auth);
  }

  
  bejelentkez(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  
  kijelentkez(): Promise<void> {
    localStorage.setItem('bejelentkezve', 'false');
    return signOut(this.auth).then(() => {
      //this.router.navigateByUrl('/home');
      window.location.href = "/kezdo";
    });
  }
  
  kiVagyTe(): Observable<User | null> {
    return this.bejelentkezettFelhasznalo;
  }
  
  frissitBejelentkezesiStatus(bejelentkezveE: boolean): void {
    localStorage.setItem('bejelentkezve', bejelentkezveE ? 'true' : 'false');
  }

  /*regisztral(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }*/

  regisztral(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      const felhasznalo: Felhasznalo = {
        id: user.uid,
        email: user.email || ''
      };

      try {
        const userDocRef = doc(this.firestore, 'Felhasznalo', user.uid);
        await setDoc(userDocRef, felhasznalo);
        console.log('Felhasználó mentve az adatbázisba:', felhasznalo);
      } catch (error) {
        console.error('Nem sikerült elmenteni az adatokat a Firestore-ba:', error);
        throw new Error('Sikeres regisztráció, de adatbázis-mentés sikertelen.');
      }

      return userCredential;
    })
    .catch((error) => {
      console.error('Regisztrációs hiba:', error);
      throw error;
    });
  }


}
