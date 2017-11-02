import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { WebsocketService } from './websocket.service';

const CHAT_URL = 'ws://145.100.211.103:8080/';

@Injectable()
export class ApiService {

  constructor(wsService: WebsocketService) { }

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

}
