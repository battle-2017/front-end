import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() conversation: Object;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    // this.activatedRoute.params.subscribe(params => {
    //   this.conversation = + params['id'];
    // });
    // this.router.navigate(['/dashboard/chat/'+id]);
  }


}
