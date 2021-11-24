import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Dororo } from 'src/app/Interface/dororo.interface';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-objetos-dororo',
  templateUrl: './objetos-dororo.component.html',
  styleUrls: ['./objetos-dororo.component.css']
})
export class ObjetosDororoComponent implements OnInit {
  dororos:Dororo[];
  
  constructor(private serVice:ServicioService) {this.dororos=[]}
  ngOnInit(): void {
    this.serVice.getDororos().subscribe(
      dororos=>this.dororos= dororos
    )
  }

 
}
