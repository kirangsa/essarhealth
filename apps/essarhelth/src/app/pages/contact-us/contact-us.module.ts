import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class ContactUsModule { }
