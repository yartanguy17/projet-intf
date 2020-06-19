import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './main/client/client.component';
import { AgenceComponent } from './main/agence/agence.component';
import { VoyageComponent } from './main/voyage/voyage.component';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { DeconnexionComponent } from './composants/deconnexion/deconnexion.component';


const routes: Routes = [
  {path: '', component: ClientComponent},
  {path: 'agence', component: AgenceComponent},
  {path: 'voyage', component: VoyageComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'deconnexion', component: DeconnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
