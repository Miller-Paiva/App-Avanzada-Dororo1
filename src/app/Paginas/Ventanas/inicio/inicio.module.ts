import { NgModule } from "@angular/core";
import { InicioComponent } from "./inicio.component";
import { CommonModule } from "@angular/common";
import { InicioRoutingModule } from "./inicio-routing.module";

@NgModule({
    declarations:[
        InicioComponent
        
    ],imports:[
        CommonModule,
        InicioRoutingModule

    ]
})
export class InicioModule {}