import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { AccountService } from '../../_services/account.service';

const mockdata = [{
    "enrollmentId": "123456ABCD",
    "meetingId": 1,
    "startTime": "10.00 pm",
    "endTime": "10.30 pm",
    // "upcoming-meetings":
    //       {
    //         "todayDate": "4/23/2020",
    //         "time": "5:39",
    //           "scheduledMeeting": [
    //               {
    //                   "meetingId": 1,
    //                   "startTime": "10.00 pm",
    //                   "endTime": "10.30 pm"
    //               },
    //               {
    //                   "meetingId": 2,
    //                   "startTime": "11.00 pm",
    //                   "endTime": "11.30 pm"
    //               },
    //               {
    //                   "meetingId": 3,
    //                   "startTime": "12.00 pm",
    //                   "endTime": "12.30 pm"
    //               }
    //           ]
    //       }
    }];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {
  user: User;

  homePageData = [1, 2, 3, 4, 5, 6];

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
   }

  ngOnInit(): void {

  }

}
