import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { ObjetosDororoComponent } from "./objetos-dororo.component";

const routes: Routes =[
    {path:'',component: ObjetosDororoComponent}

];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ObjetosdororoRoutingModule{}