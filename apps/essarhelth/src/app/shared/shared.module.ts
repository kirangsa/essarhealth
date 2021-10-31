import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinUsBannerComponent } from './join-us-banner/join-us-banner.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NeedStaffBannerComponent } from './need-staff-banner/need-staff-banner.component';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';



@NgModule({
  declarations: [
    JoinUsBannerComponent,
    NeedStaffBannerComponent,
    ReferFriendComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,

  ],
  exports: [
    JoinUsBannerComponent,
    NeedStaffBannerComponent,
    ReferFriendComponent
  ]
})
export class SharedModule { }
