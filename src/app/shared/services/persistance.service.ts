import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {

  constructor() {
  }

  set(key: string, data: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Erreur lors de la sauvegarde dans local storage', e);
    }
  }

  get(key: string): unknown {
    try {
      const localStorageItem = localStorage.getItem(key);
      return localStorageItem ? JSON.parse(localStorageItem) : null;
    } catch (e) {
      console.error('Erreur lors de la récupération du local storage', e);
      return null;
    }
  }
}
