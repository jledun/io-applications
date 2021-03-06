import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoaderComponent } from './loader/loader.component';
import { DataRefresher } from './class/dataRefresher.class';
import { ApplicationParamComponent } from './application-param/application-param.component';
import { ApplicationParamPopupComponent } from './application-param-popup/application-param-popup.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    LoaderComponent,
    ApplicationParamComponent,
    ApplicationParamPopupComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTooltipModule,
    FlexLayoutModule
  ],
  exports: [
    LoaderComponent,
    ApplicationParamComponent,
    ApplicationParamPopupComponent,
    DefaultComponent
  ],
  entryComponents: [
    ApplicationParamPopupComponent
  ]
})
export class LibModule { }
