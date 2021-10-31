import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Job } from '../../../core/interfaces/job.inteface';
import { JobService } from '../../../core/services/job.service';
import { DialogService } from '../../../shared/dialog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit, OnDestroy {

  constructor(public jobsService: JobService,
    private route: ActivatedRoute,
    private router: Router, public dialogService: DialogService) { }
  jobsSub$!: Observable<Job>;

  ngOnInit(): void {
    this.jobsSub$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.jobsService.getJob(params.get('id')!))
    );
  }

  joinUs(job: Job) {
    this.dialogService.showJoinUs(job);
  }


  ngOnDestroy() { }


}
