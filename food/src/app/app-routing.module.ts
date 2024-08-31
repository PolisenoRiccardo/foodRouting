import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ProdottoComponent } from './prodotto/prodotto.component';

const routes: Routes = [
  { path: '',   redirectTo: '/prodotto/737628064502', pathMatch: 'full' },
  //{ path: '',   redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'prodotto/:id', component: ProdottoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
