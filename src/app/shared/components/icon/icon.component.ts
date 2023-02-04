import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'icon-component',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {


  @Input() icon!: string;
  @Input() visible!: boolean;
  @Input() description!: string;
  @Input() className!: string;

  ngOnInit(): void {
      this.visible = false;
  }
}
