
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { environment } from 'apps/essarhelth/src/environments/environment';
import { Observable } from 'rxjs';
import { HttpService } from '../../core/services/data.service';

@Component({
  selector: 'app-staff-request',
  templateUrl: './staff-request.component.html',
  styleUrls: ['./staff-request.component.scss']
})
export class StaffRequestComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder, private httpService : HttpService) {
    this.formGroup = this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const formGroup = this.formBuilder.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'phone': [null, Validators.required],
      'description': [null, [Validators.required, Validators.minLength(10)]],
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


  onSubmit(data:any) {
    const url= environment.api_url+'/staffRequest';
    this.httpService.post(url,data).subscribe(x => {
      console.log(x);
    })
  }

}
