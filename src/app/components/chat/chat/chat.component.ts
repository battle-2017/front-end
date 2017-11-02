import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from 'app/shared/services/api.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() chat: Object;
  conversation: Array<Object>;

  constructor(
    private apiService: ApiService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit() {
    this.apiService.getConversation().subscribe(conversation => {
      this.conversation = conversation;
    });
  }


}
