import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {IconComponent} from "./components/icon/icon.component";
import {ImageComponent} from "./components/image/image.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    IconComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
    IconComponent,
    ImageComponent
  ],

})
export class SharedModule {
}
