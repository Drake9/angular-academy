import { PersonsService } from './../services/persons/persons.service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../models/Person';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

  persons: Person[];

  constructor(private personsService: PersonsService) { }

  ngOnInit() {
    this.personsListListener();
  }

  private personsListListener() {
    this.personsService.getPersons().subscribe((persons: Person[]) => {
      this.persons = persons;
    },
    (error) => {
      console.error(error);
    });
  }
}
