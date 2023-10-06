import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  @Output() newPerson = new EventEmitter();
  list: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.loadPersons();
  }

  onNewPerson() {
    this.newPerson.emit();
  }

  onDelete(id: string) {
    const confirmResult = confirm('Seguro que desea borrar');

    if (confirmResult) {
      this.personService.delete(id).subscribe({
        next: () => {
          alert('Persona eliminada');
          this.loadPersons();
        }
      })
    }

  }

  private loadPersons() {
    this.personService.get().subscribe({
      next: (persons: Person[]) => {
        this.list = persons;
      }
    })
  }
}
