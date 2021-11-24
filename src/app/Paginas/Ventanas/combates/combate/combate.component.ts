import { Component, Input, OnInit } from '@angular/core';
import { Combate } from 'src/app/Interface/combate.interface';

@Component({
  selector: 'app-combate',
  templateUrl: './combate.component.html',
  styleUrls: ['./combate.component.css']
})
export class CombateComponent implements OnInit {

  constructor() { }
  @Input () combate!: Combate;

  ngOnInit(): void {
  }

}
