import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChiediciboService } from '../chiedicibo.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent {
  routeObs !: Observable<ParamMap>; 
  obsProduct !: Observable<Object>;
  results: any;

  constructor(
    public chiedicibo: ChiediciboService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route product/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
    {
      let productId = params.get('id') || ''; 
      console.log(productId); 
      this.obsProduct = this.chiedicibo.searchProduct(productId);
      this.obsProduct.subscribe((data) => { 
        this.results = data; 
        console.log(this.results);  
      });
    }
     
}
