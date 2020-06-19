import { Injectable } from '@angular/core';
import { Voyage } from '../classes/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {


  constructor() { }

  getVoyage() {
   const voyage: Voyage[] = [
      {
        nomAgence: 'N° 1',
        lieuDepart: 'Lomé',
        lieuArrive: 'Sokodé',
        dateDepart: '12/10/20',
        heureDepart: '6 h 00',
        placeRestante: 20 / 60,
        prixVoyage: '5000 f CFA'
      },
      {
        nomAgence: 'N° 5',
        lieuDepart: 'Lomé',
        lieuArrive: 'Kpalimé',
        dateDepart: '13/10/20',
        heureDepart: '6 h 00',
        placeRestante: 10 / 20,
        prixVoyage: '2000 f CFA'
      },
      {
        nomAgence: 'N° 10',
        lieuDepart: 'Lomé',
        lieuArrive: 'Kara',
        dateDepart: '18/10/20',
        heureDepart: '6 h 00',
        placeRestante: 15 / 30,
        prixVoyage: '10000 f CFA'
      },
    ];
   return voyage;
  }
}
