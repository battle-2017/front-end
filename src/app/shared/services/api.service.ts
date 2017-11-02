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

  public getConversation(): Observable<any> {
    
    return Observable.of([
      {
        text: 'Ik ben op zoek naar een film.',
        recieved: false,
        timestamp: 1500000000
      },
      {
        text: 'Welke soort films vind je leuk?',
        recieved: true,
        timestamp: 1500000002
      },
      {
        text: 'Actiefilms.',
        recieved: false,
        timestamp: 1500000006
      },
      {
        text: 'Oke, ik ga voor je op zoek.',
        recieved: true,
        timestamp: 1500000010
      }
    ])

  }

}
