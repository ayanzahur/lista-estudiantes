import { Component, OnInit } from '@angular/core';
import { Estudiante } from './estudiante';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
estudiante: Estudiante = {
    id: 1,
    nombre: 'Juan López'
     };
  constructor() { }

  ngOnInit() {
  }

}
