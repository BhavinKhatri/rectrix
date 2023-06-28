import { NgModule } from '@angular/core';
import { RectrixCoreComponent } from './rectrix-core.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    RectrixCoreComponent,
    PrimaryButtonComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    RectrixCoreComponent,
    PrimaryButtonComponent
  ]
})
export class RectrixCoreModule { }
