import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dororo } from 'src/app/Interface/dororo.interface';
import { ServicioService } from 'src/app/Servicios/servicio.service';


@Component({
  selector: 'app-formulario-dororo',
  templateUrl: './formulario-dororo.component.html',
  styleUrls: ['./formulario-dororo.component.css']
})
export class FormularioDororoComponent implements OnInit {
  dororos:Dororo;

  constructor(private servis:ServicioService,
    private router:Router) { 
    this.dororos= new Dororo(0,'','','','')
  }

  ngOnInit(): void {
  }
  create():void{
    this.servis.create(this.dororos).subscribe(
      Response=> this.router.navigate(['/dororo'])
    )
  }



}
