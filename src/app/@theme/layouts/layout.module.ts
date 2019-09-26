import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideNavLayoutComponent } from './side-nav-layout/side-nav-layout.component';
import { BlankLayoutComponent } from './blanklayout/blank.layout.component';
import { NavComponent } from '../component/nav/nav.component';
import { TopNavComponent } from '../component/top-nav/top-nav.component';
import { BreadcrumbNavComponent } from '../component/breadcrumb-nav/breadcrumb-nav.component';

@NgModule({
  declarations: [
    SideNavLayoutComponent,
    BlankLayoutComponent,
    NavComponent,
    TopNavComponent,
    BreadcrumbNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideNavLayoutComponent,
    BlankLayoutComponent,
    NavComponent,
    TopNavComponent,
    BreadcrumbNavComponent
  ]
})
export class LayoutModule { }
