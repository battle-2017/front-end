import { Component, OnInit, Input, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from 'app/shared/services/api.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('autoscroll') private conversationContainer: ElementRef;

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
    this.scrollToBottom();
  }

  ngAfterViewChecked() {        
      this.scrollToBottom();
  }

  scrollToBottom(): void {
      try {
          this.conversationContainer.nativeElement.scrollTop = this.conversationContainer.nativeElement.scrollHeight;
      } catch(err) { }
  }

  sendMessage(message) {
    if(message) {
      this.conversation.push({
        text: message,
        recieved: false,
        timestamp: +new Date()
      });
    }
  }

}
