import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [ProductsComponent,MobileComponent, LaptopsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
