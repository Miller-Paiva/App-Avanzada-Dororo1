import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'demonios',loadChildren:()=> import('./Paginas/Ventanas/demonios/demonios.module').then(m=>m.DemoniosModule)},
  {path:'inicio', loadChildren:()=> import('./Paginas/Ventanas/inicio/inicio.module').then(m=>m.InicioModule)},
  {path:'combate', loadChildren:()=> import('./Paginas/Ventanas/combates/combates.module').then(m=>m.CombatesModule)},
  {path:'dororo',loadChildren:()=>import('./Paginas/Ventanas/objetos-dororo/objetos-dororo.module').then(m=>m.ObjetosDororoModule)},
  {path:'formularioDororo',loadChildren:()=>import('./Paginas/Ventanas/formulario-dororo/formulario-dororo.module').then(m=>m.FormularioDororoModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
