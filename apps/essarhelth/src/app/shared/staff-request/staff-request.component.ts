import { ReferComponent } from './../refer/refer.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { environment } from 'apps/essarhelth/src/environments/environment';
import { Observable } from 'rxjs';
import { HttpService } from '../../core/services/data.service';
import { Job } from '../../core/interfaces/job.inteface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-staff-request',
  templateUrl: './staff-request.component.html',
  styleUrls: ['./staff-request.component.scss']
})
export class StaffRequestComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ReferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Job, public httpService: HttpService, private http: HttpClient, private dialog: MatDialog, private _snackBar: MatSnackBar) {
    this.formGroup = this.createForm();

  }

  ngOnInit() {

  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const formGroup = this.formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'phone': [null, Validators.required],
      'requirements': [null, [Validators.required, Validators.minLength(10)]],
    });
    return formGroup;
  }

  getErrorEmail() {
    return this.formGroup.get('email')!.hasError('required') ? 'Field is required' :
      this.formGroup.get('email')!.hasError('pattern') ? 'Not a valid email address' : ""
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  }


  // onSubmit(data: any) { this.http.post('/staffRequest.php', data)
  //     .subscribe( data => this.dialog.closeAll())
  // }

  onSubmit(data: any) {
    const url = environment.aws_url + 'need-nurse';

    this.http.post(url, data)
    .subscribe(
      data => (this.dialog.closeAll(),
        this._snackBar.open('Successfully submitted your request!')),
      error => this._snackBar.open('Something went wrong!')
      );
  }


}
