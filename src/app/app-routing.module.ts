import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AutosComponent } from './components/autos/autos.component';
import { ParqueaderosComponent } from './components/parqueaderos/parqueaderos.component';


const routes: Routes = [
  { path: 'autos/:id', component: AutosComponent },
  { path: 'parqueaderos', component: ParqueaderosComponent },
  { path: '', pathMatch: 'full', redirectTo: 'parqueaderos' },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

