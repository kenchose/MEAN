//import all componenta
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent} from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path: 'burbank', component: BurbankComponent},
  {path: 'chicago', component: ChicagoComponent},
  {path: 'dallas', component: DallasComponent},
  {path: 'sanjose', component: SanJoseComponent},
  {path: 'seattle', component: SeattleComponent},
  {path: 'washington', component: WashingtonComponent},
  { path: '', pathMatch: 'full', redirectTo: '/' },

   // use a colon and parameter name to include a parameter in the url
  //  { path: 'gamma/:id', component: GammaComponent },

   // redirect to /alpha if there is nothing in the url
  //  { path: '', pathMatch: 'full', redirectTo: '/alpha' },

   // the ** will catch anything that did not match any of the above routes
  //  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
