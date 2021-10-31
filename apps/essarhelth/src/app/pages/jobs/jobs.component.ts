import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../core/interfaces/job.inteface';
import { JobService } from '../../core/services/job.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  constructor(public jobService: JobService) { }
  jobs$!: Observable<Job[]>;
  ngOnInit(): void {
    this.jobs$ = this.jobService.getJobs();
  }
}
