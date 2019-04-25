import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*
  Generated class for the EventViewerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventViewerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EventViewerProvider Provider');
  }

  getEventData():Observable<any>{
    return this.http.get("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=IE&apikey=BAj26qMWCnv3pIRTHl91YXymFKWV02zA");
  }
}
