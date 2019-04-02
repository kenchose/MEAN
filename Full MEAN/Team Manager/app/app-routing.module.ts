import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { ListComponent } from './players/list/list.component';
import { AddComponent } from './players/add/add.component';

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo: '/players/list'},
  {path: 'players', component:PlayersComponent, children:[
    {path: 'list', component:ListComponent}, 
    {path: 'add', component:AddComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
