import { Component, OnInit,Input } from '@angular/core';
import { Demonio } from 'src/app/Interface/demonio.interface';

@Component({
  selector: 'app-demonio',
  templateUrl: './demonio.component.html',
  styleUrls: ['./demonio.component.css']
})
export class DemonioComponent implements OnInit {

  constructor() { }
  @Input() demonio!: Demonio;

  ngOnInit(): void {
  }

}
