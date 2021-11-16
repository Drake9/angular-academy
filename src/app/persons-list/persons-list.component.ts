import { PersonsService } from './../services/persons/persons.service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../models/Person';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

  persons: Person[];
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    surname: new FormControl("", Validators.required),
  });

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

  public onSubmit() {
    this.personsService.addPerson(this.form.value).subscribe(
      (person: Person) => {
      this.persons.push(person);
    },
      (error) => {
        console.error(error, "Sth went wrong")
      })

  }
}
