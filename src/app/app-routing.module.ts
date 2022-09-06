import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameWindowComponent } from './game-window/game-window.component';

const routes: Routes = [
  { path: '', component: GameWindowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
