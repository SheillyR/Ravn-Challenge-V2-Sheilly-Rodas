import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.scss']
})
export class CharacterProfileComponent implements OnInit {

  id!: any;
  characterProfile!: any;

  constructor(public activatedRoute: ActivatedRoute, public api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this.characterProfile = this.api.getCharacterProfile(this.id).subscribe(result => {
      this.characterProfile = result.data.person;
      console.log(this.characterProfile);
      
    });
    console.log(history.state.data)
  }

  backToListOfCharacters(){
    this.router.navigate(['home']);
    localStorage.removeItem('id');
  }

}
