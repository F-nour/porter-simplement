import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title!: string;
  @Input() subtitle!: string;

  constructor(private dialogRef: MatDialogRef<ModalComponent>) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
