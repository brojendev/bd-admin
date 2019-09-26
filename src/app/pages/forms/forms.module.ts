import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormComponent } from './form.component';
import { LayoutModule } from '../../@theme/layouts/layout.module';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    LayoutModule
  ]
})
export class FormsModule { }
