import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {SharedModule} from "../shared/shared.module";
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { RulesProcedureDialog} from './dialogs/rules-procedure/rules-procedure.component';
import {LegalNoticeDialog} from "./dialogs/legal-notice/legal-notice.component";
import {CgvDialog} from "./dialogs/cgv/cgv.component";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    LegalNoticeDialog,
    CgvDialog,
    SidebarComponent,
    NavMenuComponent,
    MenuComponent,
    RulesProcedureDialog
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
  ],
})
export class CoreModule { }
