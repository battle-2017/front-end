import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-route',
  templateUrl: './chat-route.component.html',
  styleUrls: ['./chat-route.component.scss']
})
export class ChatRouteComponent implements OnInit {

  conversations: Array<Object> = [
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
  ];

  selectedConversation: number;

  constructor() { }

  ngOnInit() {
  }

  onConversationChange($event) {
    this.selectedConversation = $event;
  }

}
