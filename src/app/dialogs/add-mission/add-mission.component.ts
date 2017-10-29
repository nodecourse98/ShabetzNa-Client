import { Component} from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent{

  constructor(private dialog: MdDialog) { }
  
    openDialog() {
      let dialogRef = this.dialog.open(DialogComponent, { width: '30%' });
  
      dialogRef.afterClosed().subscribe(result => {
  
      });
    }

}