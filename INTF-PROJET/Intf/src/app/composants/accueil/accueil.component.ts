import { Component, OnInit } from '@angular/core';
import { Voyage } from 'src/app/classes/voyage';
import { VoyageService } from 'src/app/services/voyage.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/classes/reservation';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  voyage: Voyage[];
  reservation: Reservation[];
  constructor( private serviceVoyage: VoyageService , private serviceReservation: ReservationService) {
    this.afficheVoyage();
    this.afficheReservation();
   }

  ngOnInit(): void {
  }

  afficheVoyage() {
    this.voyage = this.serviceVoyage.getVoyage();
  }
  afficheReservation() {
      this.reservation = this.serviceReservation.getReservationByAgence();
  }
}
