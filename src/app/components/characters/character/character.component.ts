import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() c = {} as any;
  
  specie!: any;
  characterProfile!: any;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    if(this.c.species === null){
      this.specie = 'Human';
    } else{
      this.specie = this.c.species.name;
    }
    
  }

  showCharacterProfile(id: string){
    this.characterProfile = this.api.getCharacterProfile(id).subscribe(result => {
      this.characterProfile = result.data.person;
      console.log(this.characterProfile);
    });
  }
}
