import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BlankLayoutComponent } from './@theme/layouts/blanklayout/blank.layout.component';
import { AuthModule } from './pages/auth/auth.module';
// import { SideNavLayoutComponent } from './@theme/layouts/side-nav-layout/side-nav-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    // SideNavLayoutComponent,
    // BlankLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
