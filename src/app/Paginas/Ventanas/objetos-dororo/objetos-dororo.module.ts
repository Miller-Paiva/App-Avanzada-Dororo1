import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ObjetosDororoComponent } from "./objetos-dororo.component";
import { ObjetosdororoRoutingModule } from "./objetos-dororo-routing.module";
import { ObjetosComponent } from "./objetos/objetos.component";
import { FormularioDororoComponent } from "../formulario-dororo/formulario-dororo.component";



@NgModule({
    declarations:[
        ObjetosDororoComponent,
        ObjetosComponent, 
        
        
    ],
    imports:[
        CommonModule,
        ObjetosdororoRoutingModule

    ]
})

export class ObjetosDororoModule{}