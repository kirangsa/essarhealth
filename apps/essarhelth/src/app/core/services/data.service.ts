import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  post(url: string, payload?: any, headers?: HttpHeaders): Observable<any> {
    let params = new HttpParams();
    const options: any = {};
    options['params'] = params;
    if (!!headers) {
      options['headers'] = {...headers, 'Access-Control-Allow-Origin':  '*'};
    }
    return this.http.post<any>(url, payload, options);
  }

  fetch(url: string, opts: any = {}, body: any = null, cacheBustingValue?: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('apiCall', 'true');
    if (cacheBustingValue) {
      params = params.append('cache', cacheBustingValue);
    }
    const queryOpts = { ...opts, params };
    switch (opts.req) {
      case 'delete':
        return this.http.delete<any>(url, queryOpts);
      case 'put':
        return this.http.put<any>(url, body, queryOpts);
      case 'head':
        return this.http.head<any>(url, queryOpts);
      case 'patch':
        return this.http.patch<any>(url, body, queryOpts);
      default:
        return this.http.get<any>(url, queryOpts);
    }
  }


}
