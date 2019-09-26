import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/auth/auth.module#AuthModule'
    // component: LoginComponent
  },
  {
    path: 'auth',
    loadChildren: './pages/auth/auth.module#AuthModule'
  },
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'forms',
    loadChildren: './pages/forms/forms.module#FormsModule',
  },
  {
    path: 'buttons',
    loadChildren: './pages/buttons/buttons.module#ButtonsModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
