import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  constructor() { }

  public get conversations(): Observable<any> {
   
    return Observable.of([
      {
        id: 0,
        name: 'Hendrik van Gieten',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg',
        active: true,
        unread: true,
      },
      {
        id: 1,
        name: 'Mirjam de Vries',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
        active: false,
        unread: true,
      }
    ]);
    
  }

}
