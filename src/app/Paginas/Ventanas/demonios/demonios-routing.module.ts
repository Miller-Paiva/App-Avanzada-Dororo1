import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoniosComponent } from './demonios.component';

const routes: Routes = [
    { path: '', component: DemoniosComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoniosRoutingModule { }