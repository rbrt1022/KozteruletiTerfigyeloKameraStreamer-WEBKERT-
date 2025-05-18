import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({ 
      projectId: "leskelodo-2697d", 
      appId: "1:1022559302867:web:f9ac298f5bb7b2d4181026", 
      storageBucket: "leskelodo-2697d.firebasestorage.app", 
      apiKey: "AIzaSyDHkDXnnoAZcuN943k4-kJCQUIVaNMNtg0", 
      authDomain: "leskelodo-2697d.firebaseapp.com", 
      messagingSenderId: "1022559302867" 
    })),
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())]
};
