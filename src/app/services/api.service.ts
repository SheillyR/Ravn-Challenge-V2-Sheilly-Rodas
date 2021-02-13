import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag'; 

const GET_CHARACTERS = gql`
query Characters ($first: Int, $after: String) {
  allPeople (first: $first, after: $after){
    totalCount
    
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    
    edges{
      cursor
      node{
        id
        edited
      }
    }
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
`;

const GET_CHARACTER_PROFILE = gql`
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
`;

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
      query: GET_CHARACTERS,
      variables: {
        first: 5,
      },
    }).valueChanges.pipe(map(result => result));
  }

  getCharacterProfile(identifier: string): Observable<any>{
    return this.characterProfile = this.apollo.watchQuery<any>({
      query: GET_CHARACTER_PROFILE, 
      variables:{ 
        id: identifier 
      },
    }).valueChanges.pipe(map(result => result));
  }

}
