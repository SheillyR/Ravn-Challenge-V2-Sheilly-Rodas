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
  constructor(public api: ApiService) { }

  ngOnInit(): void {
    // Get data from the API
    const data  = this.api.getCharacters().pipe(map(result => result.data.allPeople.people));
    data.subscribe((characters: any[])=> {
      this.characters = characters;
    })
  }

}
