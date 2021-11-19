import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-refer-friend',
  templateUrl: './refer-friend.component.html',
  styleUrls: ['./refer-friend.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferFriendComponent implements OnInit {

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }

  refer(){
    this.dialogService.showRefer();
  }

}
