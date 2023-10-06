import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../models/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {
  @Output() personAdded = new EventEmitter();
  person: Person = {} as Person;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {

  }

  savePerson() {
    this.personService.create(this.person).subscribe({
      next: (person: Person) => {
        alert('Persona creada');
        this.person = {} as Person;
        this.personAdded.emit();
        console.log(person);
      },
      error: () => {
        alert('Ocurrio un error al guardar persona')
      }
    })
  }

}
