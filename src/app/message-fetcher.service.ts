import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMessage } from './message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageFetcherService {
  private _url = 'https://api.twilio.com/2010-04-01/Accounts/ACc3f94484dc688fffe6883775de14012a/Messages.json';

  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic QUNjM2Y5NDQ4NGRjNjg4ZmZmZTY4ODM3NzVkZTE0MDEyYTpiZGNiMWJlMWU3OTEzNmYxYWU3YWM2YTZiM2Q4MDY2OA=='
    })
  };

  constructor(private http: HttpClient) {
  }

  sendMessage(messageBody: string, to: string): Observable<any[]> {
    // console.log(messageBody, to);
    return this.http.post<any[]>(this._url,
      {
        url: this._url,
        headers: {
          'Authorization': 'Basic QUNjM2Y5NDQ4NGRjNjg4ZmZmZTY4ODM3NzVkZTE0MDEyYTpiZGNiMWJlMWU3OTEzNmYxYWU3YWM2YTZiM2Q4MDY2OA==',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: `Body=${messageBody}'&To=${to}&From=16465863849`,
        withCredentials: false
      });
  }

  getMessages(){
    // return this.http.get<IMessage[]>(this._url, this._httpOptions);
    return this.http.get<IMessage[]>(this._url, this._httpOptions);
  }

}
