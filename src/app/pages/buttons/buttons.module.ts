import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonComponent } from './button.component';
import { LayoutModule } from '../../@theme/layouts/layout.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    LayoutModule
  ]
})
export class ButtonsModule { }
