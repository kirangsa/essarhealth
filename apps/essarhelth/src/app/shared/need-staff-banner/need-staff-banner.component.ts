import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-need-staff-banner',
  templateUrl: './need-staff-banner.component.html',
  styleUrls: ['./need-staff-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NeedStaffBannerComponent {

  constructor(public dialogService: DialogService) { }

  request() {
    this.dialogService.showRequestStaff();
  }

}
