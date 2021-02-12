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
  characterProfile!: Observable<any>;

  constructor(private apollo: Apollo) { 
  }

  getCharacters(): Observable<any> {
    return this.characters = this.apollo.watchQuery<any>({
      query: gql`
      query Characters {
        allPeople{
          people{
            id
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

  getCharacterProfile(identifier: string): Observable<any>{
    return this.characterProfile = this.apollo.watchQuery<any>({
      query: gql`
      query getPeople($id: ID){
        person (id: $id) {
          name
          eyeColor
          hairColor
          skinColor
          birthYear
          vehicleConnection {
            vehicles {
              name
            }
          }
        }
      }
      `, 
      variables:{ 
        id: identifier 
      },
    }).valueChanges.pipe(map(result => result));
  }

}
