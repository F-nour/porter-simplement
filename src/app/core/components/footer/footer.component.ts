import {Component, Input, OnInit} from '@angular/core';
import * as menuData from "../../data/menu.json";
import {Menu} from "../../models/menu.model";
import {CgvDialog} from "../../dialogs/cgv/cgv.component";
import {LegalNoticeDialog} from "../../dialogs/legal-notice/legal-notice.component";
import {RulesProcedureDialog} from "../../dialogs/rules-procedure/rules-procedure.component";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'footer-menu',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menuItems: Menu[] = (menuData as any).default
  @Input() layout: string = "row";
  dialogRef!: MatDialogRef<any>

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }


  openDialog(dialog: string | null) {
    let modal = null
    switch (dialog) {
      case "legal":
        modal = LegalNoticeDialog;
        break;
      case "cgv":
        modal = CgvDialog;
        break;
      case "rules":
        modal = RulesProcedureDialog;
        break;
    }
    if (modal !== null) {
      this.dialogRef = this.dialog.open(LegalNoticeDialog);
    }
  }
}

