import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentRoutingModule } from './recruitment-routing.module';
import { RecruitmentComponent } from './recruitment.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    RecruitmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RecruitmentRoutingModule
  ]
})
export class RecruitmentModule { }
