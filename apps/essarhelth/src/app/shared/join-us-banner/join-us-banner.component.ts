import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-join-us-banner',
  templateUrl: './join-us-banner.component.html',
  styleUrls: ['./join-us-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JoinUsBannerComponent {

  constructor(public dialogService: DialogService) { }

  joinUs() {
    this.dialogService.showJoinUs();
  }


}
