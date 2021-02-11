import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag'; 
/* interface Characters {
  people: People;
}

interface People{
  id: string;
  name: string;
}

interface Response{
  allPeople: Characters[];
} */

const GET_CHARACTERS = gql`
query Characters {
  allPeople{
    people{
      id
      name
    }
    
  }
}
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ravn-challenge-v2';
  characters!: Observable<any>;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.characters = this.apollo.watchQuery<any>({
      query: gql`
      query {
        allPeople{
          people{
          id
          name
          }
          
        }
      
      }
      `
    }).valueChanges.pipe(map(result => result.data.allPeople.people));
  }
}
