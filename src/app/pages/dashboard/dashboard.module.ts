import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { OpenOrderComponent } from './open-order/open-order.component';
import { DashboardComponent } from './dashboard.component';
import { SideNavLayoutComponent } from '../../@theme/layouts/side-nav-layout/side-nav-layout.component';

@NgModule({
  declarations: [
    SideNavLayoutComponent,
    OpenOrderComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
