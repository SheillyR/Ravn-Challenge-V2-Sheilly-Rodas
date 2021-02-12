import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() c = {} as any;
  
  specie!: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.c.species === null){
      this.specie = 'Human';
    } else{
      this.specie = this.c.species.name;
    }
    
  }

  showCharacterProfile(id: string){
    this.router.navigate(['character-profile'], {state: { data: id }});
  }
}
