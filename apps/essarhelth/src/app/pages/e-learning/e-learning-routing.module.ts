import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ELearningComponent } from './e-learning.component';

const routes: Routes = [{ path: '', component: ELearningComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ELearningRoutingModule { }
