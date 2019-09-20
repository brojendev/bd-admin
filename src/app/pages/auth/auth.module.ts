import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { BlankLayoutComponent } from '../../@theme/layouts/blanklayout/blank.layout.component';
import { LayoutModule } from '../../@theme/layouts/layout.module';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    AuthComponent,
    // BlankLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LayoutModule
  ]
})
export class AuthModule { }
