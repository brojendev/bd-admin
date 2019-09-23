import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavLayoutComponent } from './side-nav-layout/side-nav-layout.component';
import { BlankLayoutComponent } from './blanklayout/blank.layout.component';
import { NavComponent } from '../component/nav/nav.component';

@NgModule({
  declarations: [
    SideNavLayoutComponent,
    BlankLayoutComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideNavLayoutComponent,
    BlankLayoutComponent,
    NavComponent
  ]
})
export class LayoutModule { }