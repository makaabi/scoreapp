import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calcul1Component } from './calcul1/calcul1.component';
import { Calcul2Component } from './calcul2/calcul2.component';
import { CalculinsatComponent } from './calculinsat/calculinsat.component';

const routes: Routes = [

  {path:'1ere',component:Calcul1Component},
  {path:'2eme',component:Calcul2Component},
  {path:'insat',component:CalculinsatComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
