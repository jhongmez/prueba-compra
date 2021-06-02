import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionesAddComponent } from './components/direcciones-add/direcciones-add.component';
import { DireccionesListComponent } from './components/direcciones-list/direcciones-list.component';
import { DireccionesRoutingModule } from './direcciones.routing.module';



@NgModule({
  declarations: [
    DireccionesAddComponent,
    DireccionesListComponent
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule
  ]
})
export class DireccionesModule { }
