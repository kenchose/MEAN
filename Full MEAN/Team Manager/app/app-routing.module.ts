import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './components/players/players.component';
import { ListComponent } from './components/players/list/list.component';
import { AddComponent } from './components/players/add/add.component';
import { StatusComponent } from './components/status/status.component';
import { Game1Component } from './components/status/game1/game1.component'
import { Game2Component } from './components/status/game2/game2.component'
import { Game3Component } from './components/status/game3/game3.component'

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo: '/players/list'},
  {path: 'players', component:PlayersComponent, children:[
    {path: 'list', component:ListComponent}, 
    {path: 'add', component:AddComponent}
  ]},
  {path: 'status', component:StatusComponent, children:[
    {path: 'game/1', component:Game1Component},
    {path: 'game/2', component:Game2Component},
    {path: 'game/3', component:Game3Component},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
