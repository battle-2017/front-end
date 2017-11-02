import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-active-chats',
  templateUrl: './active-chats.component.html',
  styleUrls: ['./active-chats.component.scss']
})
export class ActiveChatsComponent implements OnInit {

  @Input() conversations: Object;
  @Input() selectedConversation: number;
  @Output() conversationChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  selectConversation(id) {
    this.conversationChange.emit(id);
  }

}
