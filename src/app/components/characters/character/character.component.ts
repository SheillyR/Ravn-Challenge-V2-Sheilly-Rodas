import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() c = {} as any;
  
  specie!: any;
  constructor() { }

  ngOnInit(): void {
    if(this.c.species === null){
      this.specie = 'Human';
    } else{
      this.specie = this.c.species.name;
    }
    
  }

}
