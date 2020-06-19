import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
//import {MatIcon} from '@angular/material/icon';
//import {MatTable} from '@angular/material/table';

// import { MatSliderModule } from '@angular/material/slider/slider-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { CompteComponent } from './composants/compte/compte.component';
import { ReservationComponent } from './composants/reservation/reservation.component';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';
import { AddClientComponent } from './admin/add-client/add-client.component';
import { AllClientComponent } from './admin/all-client/all-client.component';
import { AllVoyageComponent } from './admin/all-voyage/all-voyage.component';
import { AddVoyageComponent } from './admin/add-voyage/add-voyage.component';
import { VoyageComponent } from './composants/voyage/voyage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    CompteComponent,
    ReservationComponent,
    ConnexionComponent,
    InscriptionComponent,
    AddClientComponent,
    AllClientComponent,
    AllVoyageComponent,
    AddVoyageComponent,
    VoyageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
    //MatIcon
    //MatTable
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
