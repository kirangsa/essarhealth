import { DialogService } from './../../../../shared/dialog.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {

  constructor(public dialogService: DialogService) { }


  request() {
    this.dialogService.showRequestStaff();
  }

  joinUs() {
    this.dialogService.showJoinUs();
  }

}
