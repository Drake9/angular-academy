import { UniversitiesService } from './../services/universities/universities.service';
import { Component, OnInit } from '@angular/core';
import { University } from '../models/university';

@Component({
  selector: 'app-universities-list',
  templateUrl: './universities-list.component.html',
  styleUrls: ['./universities-list.component.scss']
})
export class UniversitiesListComponent implements OnInit {

  universities: University[];

  constructor(private universitiesService: UniversitiesService) { }

  ngOnInit() {
    this.universitiesListListener();
  }

  private universitiesListListener() {
    this.universitiesService.getUniversities().subscribe((universities: University[]) => {
      this.universities = universities;
    },
    (error) => {
      console.error(error);
    });
  }
}
