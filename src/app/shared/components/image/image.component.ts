import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: ' image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() file!: string;
  @Input() visible: boolean = false;
  @Input() description!: string;
  @Input() className!: string;
  hidden!: boolean;

    ngOnInit(): void {
      this.hidden = !this.visible;
  }
}
