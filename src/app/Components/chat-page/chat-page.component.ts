import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  starredItems: any[] = [
    {
      'chaturl': '../../../assets/Images/favicon-16x16.png',
      "title": "STARRED"
    },
    {
      "title": "Starred Messages"
    },
    {
      "title": "Contact Requests"
    },
    {
      "title": "All Files"
    },
    {
      "title": "Sonam Dhadiwal"
    }
  ];

  starredListNumber: number;

  currentUser: 'string';

  //starredItems = ['Starred Messages'];

  constructor() { }

  ngOnInit(): void {
    
  }

  onChatClick(i) {
    this.starredListNumber = i;
    this.currentUser = this.starredItems[i].title;
  }

}
