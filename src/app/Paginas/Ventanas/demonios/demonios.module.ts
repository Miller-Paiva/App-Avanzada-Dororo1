import { NgModule } from "@angular/core";
import { DemonioComponent } from './demonio/demonio.component';
import { CommonModule } from "@angular/common";
import{DemoniosRoutingModule} from "./demonios-routing.module";
import { DemoniosComponent } from "./demonios.component";



@NgModule({
    declarations:[
        DemoniosComponent,
        DemonioComponent
    ],
    imports:[
        CommonModule,
        DemoniosRoutingModule
    ]
})
export class DemoniosModule { }