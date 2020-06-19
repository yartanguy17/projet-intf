import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './composants/add-client/add-client.component';
import { AddAgenceComponent } from './composants/add-agence/add-agence.component';
import { AddVoyageComponent } from './composants/add-voyage/add-voyage.component';
import { AllVoyageComponent } from './composants/all-voyage/all-voyage.component';
import { AllAgenceComponent } from './composants/all-agence/all-agence.component';
import { AllClientComponent } from './composants/all-client/all-client.component';
import { MainComponent } from './composants/main/main.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { AgenceComponent } from './main/agence/agence.component';
import { VoyageComponent } from './main/voyage/voyage.component';
import { ClientComponent } from './main/client/client.component';
import { AddClientDialogComponent } from './dialogs/add-client-dialog/add-client-dialog.component';
import { AddVoyageDialogComponent } from './dialogs/add-voyage-dialog/add-voyage-dialog.component';
import { AddAgenceDialogComponent } from './dialogs/add-agence-dialog/add-agence-dialog.component';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { DeconnexionComponent } from './composants/deconnexion/deconnexion.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    AddAgenceComponent,
    AddVoyageComponent,
    AllVoyageComponent,
    AllAgenceComponent,
    AllClientComponent,
    MainComponent,
    NavbarComponent,
    AgenceComponent,
    VoyageComponent,
    ClientComponent,
    AddClientDialogComponent,
    AddVoyageDialogComponent,
    AddAgenceDialogComponent,
    ConnexionComponent,
    DeconnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
