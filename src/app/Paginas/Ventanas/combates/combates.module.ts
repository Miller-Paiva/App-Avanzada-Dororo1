import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CombatesComponent } from "./combates.component";
import { CombatesRoutingModule } from "./combates-routing.module";
import { CombateComponent } from './combate/combate.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations:[
        CombatesComponent,
        CombateComponent
    ],
    imports:[
        CommonModule,
        CombatesRoutingModule,
        FormsModule,ReactiveFormsModule
    ]
})
export class CombatesModule { }