import { environment } from './../../../environments/environment';
import { HttpEvent, HttpEventType, HttpProgressEvent, HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Job } from '../../core/interfaces/job.inteface';
import { HttpService } from '../../core/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  location: string[] = [
    "Carlow",
    "Cavan",
    "Clare",
    "Cork",
    "Donegal",
    "Dublin",
    "Galway",
    "Kerry",
    "Kildare",
    "Kilkenny",
    "Laois",
    "Leitrim",
    "Limerick",
    'Longford',
    'Louth',
    'Mayo',
    'Meath',
    'Monaghan',
    'Offaly',
    'Roscommon',
    'Sligo',
    'Tipperary',
    'Waterford',
    'Westmeath',
    'Wexford',
    'Wicklow',

  ]
  contractType: string[] = ["Locum", "Permanent",]

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<JoinUsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Job, public httpService: HttpService, private http: HttpClient, private dialog: MatDialog, private _snackBar: MatSnackBar) {
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
      'cand_user_firstName': [null, Validators.required],
      'cand_user_lastName': [null, Validators.required],
      'cand_user_email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'cand_user_phone': [null, Validators.required],
      'cand_user_location': [null, [Validators.required]],
      'cand_user_type': [null, [Validators.required]],
      'file': [null, [Validators.required]]
    });
    return formGroup;
  }

  getErrorEmail() {
    return this.formGroup.get('cand_user_email')!.hasError('required') ? 'Field is required' :
      this.formGroup.get('cand_user_email')!.hasError('pattern') ? 'Not a valid email address' : ""
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  //   hasError( field: string, error: string ) {
  //   const control = this.signup.get(field);
  //   return control.dirty && control.hasError(error);
  // }




  onSubmit(data: any) {
    const url = environment.api_url + 'joinus';
    const formData = this.toFormData(data);
    console.log(this.toFormData(data))
    const options = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    this.http.post(url, formData)
      .subscribe(
        data => (this.dialog.closeAll(),
          this._snackBar.open('Successfully submitted your request!')),
        error => this._snackBar.open('Something went wrong!')
      );
  }

  toFormData<T>(formValue: any) {
    const formData = new FormData();
    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }
    return formData;
  }


}

