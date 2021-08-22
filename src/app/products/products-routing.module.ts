import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';
import { ProductsComponent } from './products.component';


const routes: Routes = [
  {
    path:'',component:ProductsComponent
  },
  {
    path:'mobile',component:MobileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
