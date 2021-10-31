import { Job } from './../../../../core/interfaces/job.inteface';
import { JobService } from './../../../../core/services/job.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-latest-jobs',
  templateUrl: './latest-jobs.component.html',
  styleUrls: ['./latest-jobs.component.scss']
})
export class LatestJobsComponent implements OnInit {

  constructor(public jobService : JobService) { }
  jobs$! : Observable<Job[]>;
  ngOnInit(): void {
    this.jobs$ = this.jobService.getJobs();
  }


}
