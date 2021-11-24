import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Combate } from 'src/app/Interface/combate.interface';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-combates',
  templateUrl: './combates.component.html',
  styleUrls: ['./combates.component.css']
})
export class CombatesComponent implements OnInit {
  combates!: Combate[];
  combatex:Combate;

  constructor(private combateSvc: ServicioService,private router:Router) {this.combatex=new Combate(0,'','','') }

  ngOnInit(): void {
    this.combateSvc.getCombates().subscribe(
      combates=>this.combates= combates
    )
  }
  create1():void {
    this.combateSvc.create1(this.combatex).subscribe(Response=> this.router.navigate(['/combate']))
  }
  refresh():void{
    window.location.reload();

  }

}
