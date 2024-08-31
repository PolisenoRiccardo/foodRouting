import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChiediciboService } from '../chiedicibo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query !: string;
  obsFood !: Observable<Object>;
  results: any;

  constructor(public chiedicibo: ChiediciboService) {}

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }

    this.query = query.value;
    this.obsFood = this.chiedicibo.searchFood(this.query);
    this.obsFood.subscribe((data) => { this.results = data; console.log(this.results) });
  }
}
