import { Injectable } from '@angular/core';
import { Reservation } from '../classes/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }

  getReservationByAgence(){
    const reservataion: Reservation[] = [
      {
        idClient: 1,
        nbPassager: 30,
        passagers: '25',
        idVoyage: 'N° 1'
      },
      {
        idClient: 5,
        nbPassager: 60,
        passagers: '45',
        idVoyage: 'N° 5'
      },
      {
        idClient: 10,
        nbPassager: 20,
        passagers: '15',
        idVoyage: 'N° 10'
      }
    ];
    return reservataion;
  }
}
