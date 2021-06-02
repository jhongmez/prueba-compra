import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DireccionesListComponent } from "./components/direcciones-list/direcciones-list.component";

const routes: Routes = [
    {
        path: '',
        component: DireccionesListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class DireccionesRoutingModule{}