import { Component, OnInit } from '@angular/core';
import { Estudiante } from './estudiante';
import { ESTUDIANTES } from '../lista-estudiantes';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  estudiantes = ESTUDIANTES;
  selectedEstudiante:Estudiante;
  constructor() { }

  ngOnInit() {
  }
  
  onSelect(estudiante: Estudiante): void {
    this.selectedEstudiante = estudiante;
  }
}





