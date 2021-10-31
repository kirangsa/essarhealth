import { TESTIMONIALS } from '../testimonial';
import { Observable, of } from 'rxjs';
import { Testimonial } from './../interfaces/testimonial.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor() { }

  getTestimonials(): Observable<Testimonial[]> {
    return of(TESTIMONIALS);
  }
}
