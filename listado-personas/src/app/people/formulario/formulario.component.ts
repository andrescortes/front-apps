import {Component, OnInit} from '@angular/core';
import {LoggingService} from '../../LoggingService.service';
import {Persona} from '../../persona.model';
import {PersonasService} from '../../persona.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombreInput: string;
  apellidoInput: string;
  index: number;
  modeEdit: number;

  constructor(
    private loggingService: LoggingService,
    private personaService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.modeEdit = +this.route.snapshot.queryParams['modeEdit'];
    if (this.modeEdit != null && this.modeEdit == 1) {
      let person: Persona = this.personaService.findPerson(this.index);
      if (person != null) {
        this.nombreInput = person.nombre;
        this.apellidoInput = person.apellido;
      }
    }
  }

  onAgregarPersona(): void {
    if (this.nombreInput != null && this.apellidoInput != null) {
      let person: Persona = new Persona(this.nombreInput, this.apellidoInput);
      if (this.modeEdit != null && this.modeEdit == 1) {
        this.personaService.updatePerson(this.index, person);
      } else {
        this.personaService.agregarPersona(person);
      }
      //this.loggingService.enviaMensajeAConsola('persona agregada/modificada:' + person.toString());
      //this.router.navigate(['people']);
    } else {
      return;
    }
  }

  deletePerson(): void {
    if (this.index != null) {
      this.personaService.deletePerson(this.index);
    }
    //this.router.navigate(['people']);
  }
}
