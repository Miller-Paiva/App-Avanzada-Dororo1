import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { FormularioDororoComponent } from "./formulario-dororo.component";


const routes: Routes =[
    {path:'',component: FormularioDororoComponent}

];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class FormularioDororoRoutingModule {}