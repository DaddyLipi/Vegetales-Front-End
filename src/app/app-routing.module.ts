import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VegsComponent } from './vegs/vegs.component';
import { VegDetailComponent } from './veg-detail/veg-detail.component';
import { VegSearchComponent } from './veg-search/veg-search.component';

const routes: Routes = [
  {path: 'vegs',component: VegsComponent},
  {path: 'detail/:id', component: VegDetailComponent },
  {path: 'search', component: VegSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
