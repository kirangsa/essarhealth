import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELearningRoutingModule } from './e-learning-routing.module';
import { ELearningComponent } from './e-learning.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ELearningComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ELearningRoutingModule
  ]
})
export class ELearningModule { }
