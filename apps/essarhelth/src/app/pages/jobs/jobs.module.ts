import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { SharedModule } from '../../shared/shared.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    JobsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    MatButtonModule,
    SharedModule
  ]
})
export class JobsModule { }
