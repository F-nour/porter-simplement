import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { CgvComponent } from './components/cgv/cgv.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {SharedModule} from "../shared/shared.module";
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    LegalNoticeComponent,
    CgvComponent,
    SidebarComponent,
    CgvComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
