import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavLayoutComponent } from './side-nav-layout/side-nav-layout.component';
import { BlankLayoutComponent } from './blanklayout/blank.layout.component';
@NgModule({
  declarations: [
    SideNavLayoutComponent,
    BlankLayoutComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class LayoutModule { }
