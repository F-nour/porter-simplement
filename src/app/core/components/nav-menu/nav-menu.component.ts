import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as menuData from "../../data/menu.json";
import {Menu} from "../../models/menu.model";
import {MenuComponent} from "../menu/menu.component";


@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  @Input() layout: string = "row";
  @Input() hideLogo: boolean = false
  menuItems: Menu[] = (menuData as any).default

  constructor() {
  }

  ngOnInit() {
  }

}
