import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  loading: Boolean = false;
  error: boolean = false;
  data: boolean = false;
  constructor(public api: ApiService) { }

  ngOnInit(): void {
    // Get status loading or error from API
    const status = this.api.getCharacters().pipe(map(result => result));
    status.subscribe(result => {
      if(result.loading === true){
        this.loading = true;
      }
      if(result.error !== undefined){
        this.error = true;
      }
      if(result.data !== undefined){
        this.data = true;
      }
      console.log(result.loading)
      console.log(result.data);
    })
  }
}