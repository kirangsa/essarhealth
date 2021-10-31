import { Observable } from 'rxjs';
import { TestimonialService } from './../../../../core/services/testimonial.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Testimonial } from 'apps/essarhelth/src/app/core/interfaces/testimonial.interface';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialComponent implements OnInit {

  constructor(private testimonialService : TestimonialService) { }

  $testimonials! : Observable<Testimonial[]>;
  ngOnInit(): void {
    this.$testimonials = this.testimonialService.getTestimonials();
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 3
      }
    },
    nav: false
  }

}
