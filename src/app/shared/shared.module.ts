import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {IconComponent} from "./components/icon/icon.component";
import {ImageComponent} from "./components/image/image.component";
import {HttpClientModule} from "@angular/common/http";
import {ModalComponent} from "./components/modal/modal.component";


@NgModule({
  declarations: [
    IconComponent,
    ImageComponent,
    ModalComponent
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
    ImageComponent,
    ModalComponent
  ],

})
export class SharedModule {
}
