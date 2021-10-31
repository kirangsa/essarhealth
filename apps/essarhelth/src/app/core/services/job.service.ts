import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Job } from '../interfaces/job.inteface';
import { JOBS } from '../jobs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  getJobs(): Observable<Job[]> {
    return of(JOBS);
  }

  getJob(id: number | string) {
    return this.getJobs().pipe(
      // (+) before `id` turns the string into a number
      map((jobs: Job[]) => jobs.find(job => job.id === +id)!)
    );
  }
}
