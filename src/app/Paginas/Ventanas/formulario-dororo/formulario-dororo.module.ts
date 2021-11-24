import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

import { FormularioDororoComponent } from "./formulario-dororo.component";
import { FormularioDororoRoutingModule } from "./formulario-dororo.routing.module";




@NgModule({
    declarations:[
        FormularioDororoComponent,
    ],
    imports:[
        CommonModule,
        FormularioDororoRoutingModule,
        FormsModule, 
        ReactiveFormsModule
    ]
})

export class FormularioDororoModule{ }
/* */ 