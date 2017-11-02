import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  private apiUrl: string = 'https://api.battle.braham.biz/';

  constructor(private http: Http) { }

  public get conversations(): Observable<any> {

    return this.get('conversations');
   
    // return Observable.of([
    //   {
    //     id: 0,
    //     name: 'Hendrik van Gieten',
    //     image: 'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg',
    //     active: true,
    //     unread: true,
    //   },
    //   {
    //     id: 1,
    //     name: 'Mirjam de Vries',
    //     image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    //     active: false,
    //     unread: true,
    //   }
    // ]);
    
  }

  public getConversation(): Observable<any> {
    
    return Observable.of([
      {
        text: 'Ik ben op zoek naar een film.',
        recieved: true,
        timestamp: 1500000000
      },
      {
        text: 'Welke soort films vind je leuk?',
        recieved: false,
        timestamp: 1500000002
      },
      {
        text: 'Actiefilms.',
        recieved: true,
        timestamp: 1500000006
      },
      {
        text: 'Oke, ik ga voor je op zoek.',
        recieved: false,
        timestamp: 1500000010
      }
    ])

  }

  private get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`, 
      { headers: this.setHeaders(), search: params })
      .retry(2)
      .catch((err:any) => {
        this.handleHttpStatus(err);
        return Observable.of(undefined);
      })
      .map((res: Response) => {
        this.handleHttpStatus(res);
        return (res) ? res.json() : []
      });
  }

  private post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${this.apiUrl}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .retry(2)
    .catch((err:any) => {
      this.handleHttpStatus(err);
      return Observable.of(undefined);
    })
    .map((res: Response) => res.json());
  }


  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    // if (this.jwtService.getToken()) {
    //   headersConfig['Authorization'] = `Bearer ${this.jwtService.getToken()}`;
    // }
    return new Headers(headersConfig);
  }

  private handleHttpStatus(err: any) {
    err = err || {};
    console.warn(err);
  }

}
