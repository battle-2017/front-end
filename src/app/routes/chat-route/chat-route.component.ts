import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from 'app/shared/services/api.service';

@Component({
  selector: 'app-chat-route',
  templateUrl: './chat-route.component.html',
  styleUrls: ['./chat-route.component.scss']
})
export class ChatRouteComponent implements OnInit {

  conversations: Array<Object>;
  chatId: number;

  constructor(
    private apiService: ApiService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.chatId = +params['id'];
    });

    this.apiService.conversations.subscribe(conversations => {
      this.conversations = conversations;
      console.log(conversations);
    });
    
  }

}
