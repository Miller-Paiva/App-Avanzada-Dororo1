import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombatesComponent } from './combates.component';


const routes: Routes = [
    { path: '', component: CombatesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CombatesRoutingModule { }