import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  characters!: Observable<any>;

  constructor(private apollo: Apollo) { 
  }

  getCharacters(): Observable<any> {
    return this.characters = this.apollo.watchQuery<any>({
      query: gql`
      query Characters {
        allPeople{
          people{
            name
            species{
              name
            }
            homeworld{
              name
            }
          }
        }
      }
      `
    }).valueChanges.pipe(map(result => result));
  }

}
