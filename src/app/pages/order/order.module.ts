import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderComponent } from './order.component';
import { LayoutModule } from '../../@theme/layouts/layout.module';

@NgModule({
  declarations: [
    CreateOrderComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    LayoutModule
  ]
})
export class OrderModule { }
