import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BenifitsComponent } from './pages/home/component/benifits/benifits.component';
import { TestimonialComponent } from './pages/home/component/testimonial/testimonial.component';
import { LatestJobsComponent } from './pages/home/component/latest-jobs/latest-jobs.component';
import { HomeComponent } from './pages/home/home.component';
import { StaffRequestComponent } from './shared/staff-request/staff-request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JoinUsComponent } from './shared/join-us/join-us.component';
import { FileUploadComponent } from './shared/file-upload/file-upload.component';
import { ProgressComponent } from './shared/progress/progress.component';
import { SharedModule } from './shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BannerComponent } from './pages/home/component/banner/banner.component';
import { HttpService } from './core/services/data.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    BenifitsComponent,
    TestimonialComponent,
    LatestJobsComponent,
    HomeComponent,
    StaffRequestComponent,
    JoinUsComponent,
    FileUploadComponent,
    ProgressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    SharedModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
