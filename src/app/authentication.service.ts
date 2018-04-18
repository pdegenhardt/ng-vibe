
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';

export interface WindowsUser {
  displayName: string;
  userName: string;
}

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<WindowsUser> {
    console.log('Calling getUser');
    let serviceUrl: string = `${environment.serviceBaseUrl}account/currentUser`;
    return this.http.get(serviceUrl)
      .map((x:any) =>{ 
        return <WindowsUser> x;
      });
  }

}