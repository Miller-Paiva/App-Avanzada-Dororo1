import { Component, Input, OnInit } from '@angular/core';
import { Dororo } from 'src/app/Interface/dororo.interface';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent implements OnInit {

  constructor() { }
  @Input() dororo!: Dororo;

  ngOnInit(): void {
  }

}
