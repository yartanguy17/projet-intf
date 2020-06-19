import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { VoyageComponent } from './composants/voyage/voyage.component';
import { ReservationComponent } from './composants/reservation/reservation.component';
import { CompteComponent } from './composants/compte/compte.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';
import { ConnexionComponent } from './composants/connexion/connexion.component';


const routes: Routes = [
  { path: '' , component: AccueilComponent},
  { path: 'voyage' , component: VoyageComponent},
  { path: 'reservation' , component: ReservationComponent},
  { path: 'compte' , component: CompteComponent},
  { path: 'inscription' , component: InscriptionComponent},
  { path: 'connexion' , component: ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
