import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Job } from '../core/interfaces/job.inteface';
import { JoinUsComponent } from './join-us/join-us.component';
import { StaffRequestComponent } from './staff-request/staff-request.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  showRequestStaff(){
    const dialogRef = this.dialog.open(StaffRequestComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  showJoinUs(job?: Job){
    const dialogRef = this.dialog.open(JoinUsComponent, {
      data : job
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
