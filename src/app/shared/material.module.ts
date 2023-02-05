import {NgModule} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {DialogModule} from "@angular/cdk/dialog";
import {A11yModule} from "@angular/cdk/a11y";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";


@NgModule({
  exports: [
    A11yModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    DialogModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {
        minWidth: 'auto',
        minHeight: 'auto',
        width: "70%",
        height: "70%",
        autoFocus: true,
        ariaModal: true,
        role: 'dialog',
        restoreFocus: true,
      }
    }
  ]
})
export class MaterialModule {
}

