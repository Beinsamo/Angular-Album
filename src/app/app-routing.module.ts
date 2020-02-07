import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FebComponent } from './feb/feb.component';
import { MarComponent } from './mar/mar.component';
import { JanComponent } from './jan/jan.component';
import { PhotodetailComponent } from './photodetail/photodetail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : "jan", component: JanComponent},
  {path : "feb", component :FebComponent},
  {path : "mar", component: MarComponent},
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
