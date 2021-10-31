import { environment } from './../../../environments/environment';
import { HttpEvent, HttpEventType, HttpProgressEvent } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Job } from '../../core/interfaces/job.inteface';
import { HttpService } from '../../core/services/data.service';


export function uploadProgress<T>(cb: (progress: number) => void) {
  return tap((event: any) => {
    if (event.type === HttpEventType.UploadProgress) {
      cb(Math.round((100 * event.loaded) / event.total));
    }
  });
}

export function toResponseBody<T>() {
  return pipe(
    filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
    map((res: any) => res.body)
  );
}


@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  progress = 0;
  location: string[] = ["Midlands", "London", "East of England", "North of England", "South of England", "Wales", "Scotland", "South West"]
  contractType: string[] = ["Locum" , "Permanent", ]

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<JoinUsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Job, public httpService : HttpService) {
    this.formGroup = this.createForm();

  }

  onNoClick(): void {
    this.dialogRef.close();
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
      'location': [null, [Validators.required]],
      'locum' : [null, [Validators.required]],
      'cv': [null, [Validators.required]]
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

  //   hasError( field: string, error: string ) {
  //   const control = this.signup.get(field);
  //   return control.dirty && control.hasError(error);
  // }




  onSubmit(data: any) {
    const url= environment.api_url+'/joinUs';
    const a = this.toFormData(data);
    console.log(this.toFormData(data))
    // this.httpService.post(url,data).subscribe(x => {
    //   console.log(x);
    // })
  }

  toFormData<T>( formValue: any ) {
    const formData = new FormData();

    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }

    return formData;
  }


}

