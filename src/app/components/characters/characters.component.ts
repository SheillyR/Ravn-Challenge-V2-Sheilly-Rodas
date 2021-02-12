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
  loading: Boolean = false;
  error!: string;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    // Get data from the API
    const option= this.api.getCharacters().pipe(map(result => result));
    option.subscribe(({data, loading}) => {
      if (data.allPeople.people) this.characters = data.allPeople.people;
      else this.error = "Failed to Load Data";
      this.loading = loading;
    })
/*     const data  = this.api.getCharacters().pipe(map(result => result.data.allPeople.people));
    data.subscribe((characters: any[])=> {
      this.characters = characters;
    }) */
  }

}
