import { Injectable } from '@angular/core';
import { Firestore, collection, doc, addDoc, getDoc, setDoc, collectionData, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { query, where } from 'firebase/firestore';
import { TerfigyeloKamera } from '../interfeszek/TerfigyeloKamera';
import { v4 as uuidv4 } from 'uuid';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FelhasznaloAzonositasService } from './felhasznalo-azonositas.service';

@Injectable({
  providedIn: 'root'
})

export class TerigyeloKameraService {
  constructor(private firestore: Firestore, private fh: FelhasznaloAzonositasService) {}

  // Új kamera hozzáadása (Promise)
  ujKamera(kamera: Omit<TerfigyeloKamera, 'id'>): Promise<void> {
    
    const kameraId = uuidv4();
    const kameraRef = doc(this.firestore, 'Kamera', kameraId);
    const teljesKamera: TerfigyeloKamera = { id: kameraId, ...kamera };

    return setDoc(kameraRef, teljesKamera);
  }

  osszesKamera(): Observable<TerfigyeloKamera[]> {
    const kamerakCol = collection(this.firestore, 'Kamera');
    return collectionData(kamerakCol, { idField: 'id' }) as Observable<TerfigyeloKamera[]>;
  }

  sajatkleker(): Observable<TerfigyeloKamera[]> {
      return this.fh.kiVagyTe().pipe(
        switchMap(user => {
          if (!user) {
            return of([]); // Ha nincs bejelentkezett felhasználó, üres tömböt ad vissza
          }
          
          const kamerakCol = collection(this.firestore, 'Kamera');
          const q = query(kamerakCol, where('feltolto', '==', user.uid));
          return collectionData(q, { idField: 'id' }) as Observable<TerfigyeloKamera[]>;
        })
      );
  }
  
  async torlesKamera(kameraId: string): Promise<void> {
    const kameraDoc = doc(this.firestore, `Kamera/${kameraId}`);
    try {
      await deleteDoc(kameraDoc);
      console.log('Kamera sikeresen törölve');
    } catch (error) {
      console.error('Hiba történt a kamera törlésekor:', error);
      throw error;
    }
  }

  async szerkesztKamera(kameraId: string, ujAdatok: any): Promise<void> {
    try {
      const kameraRef = doc(this.firestore, 'Kamera', kameraId);
      await updateDoc(kameraRef, ujAdatok);
      console.log('Kamera sikeresen frissítve');
    } catch (error) {
      console.error('Hiba a kamera frissítésekor:', error);
      throw error;
    }
  }
}
