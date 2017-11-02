import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-active-chats',
  templateUrl: './active-chats.component.html',
  styleUrls: ['./active-chats.component.scss']
})
export class ActiveChatsComponent implements OnInit {

  @Input() conversations: Object;
  selectedConversation: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.selectedConversation = + params['id'];
    });
  }

  selectConversation(id) {
    this.router.navigate(['/dashboard/chat/'+id]);
  }

}
