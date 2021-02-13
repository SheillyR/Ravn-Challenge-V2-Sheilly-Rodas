import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters = [] as any;
  loading: Boolean = true;
  error: Boolean = false;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    // Get data from the API
    this.api.getCharacters().pipe(map(result => result)).subscribe(({data, loading}) => {
      if (data.allPeople.people) this.characters = data.allPeople.people;
      else this.error = true;
      this.loading = loading;
    })
  }
}
