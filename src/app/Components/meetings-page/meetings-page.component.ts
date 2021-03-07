import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings-page',
  templateUrl: './meetings-page.component.html',
  styleUrls: ['./meetings-page.component.css']
})
export class MeetingsPageComponent implements OnInit {

  meetingFlag = false;

  constructor() { }

  checkMeetingInvite() {
    this.meetingFlag = !this.meetingFlag;
  }

  ngOnInit(): void {
  }

}
