import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';

export interface Lookups {
    version: string;
    lists: LookupLists;
}

export interface LookupLists {
    projectStatus: LookupItem[];
    partyType: LookupItem[];
    priorityType: LookupItem[];
    timeZone: LookupItem[];
}

export interface LookupItem {
    id: string;
    text: string;
    description: string;
}

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  save(): Observable<Lookups> {
    console.log('Calling lookups');
    let serviceUrl: string = `${environment.serviceBaseUrl}lookup`;

    return this.http.get(serviceUrl)
      .map((x:any) => <Lookups> x);
  }

}