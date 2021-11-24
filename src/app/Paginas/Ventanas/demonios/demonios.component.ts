import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Demonio } from 'src/app/Interface/demonio.interface';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-demonios',
  templateUrl: './demonios.component.html',
  styleUrls: ['./demonios.component.css']
})
export class DemoniosComponent implements OnInit {
  demonios!: Demonio[];

  constructor(private demonioSvc: ServicioService) { }

  ngOnInit(): void {
    this.demonioSvc.getDemonios()
    .pipe(
      
      tap( (demonios: Demonio[]) => this.demonios= demonios)
    ).subscribe();
  }
  

}
