import {Component, Input, OnInit} from '@angular/core';
import * as menuData from "../../data/menu.json";
import {Menu} from "../../models/Menu.model";


@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  @Input() layout!: string;
  @Input() hideLogo: boolean = false
  menuItems: Menu[] = (menuData as any).default


  constructor() {
  }

  ngOnInit() {
  }

}
