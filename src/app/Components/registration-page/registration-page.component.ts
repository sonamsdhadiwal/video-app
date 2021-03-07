import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  continueCounter: number;
  //months: ['Jan', 'Feb', 'Mar', 'Apr'];

  months: any[] = [
    {
      month: 'Jan',
    },
    {
      month: 'Feb',
    },
    {
      month: 'Mar',
    },
    {
      month: 'Apr'
    },
    {
      month: 'May'
    },
    {
      month: 'Jun'
    },
    {
      month: 'Jul'
    },
    {
      month: 'Aug'
    },
    {
      month: 'Sep'
    },
    {
      month: 'Oct'
    },
    {
      month: 'Nov'
    },
    {
      month: 'Dec'
    }
  ];
  selectedValue = null;

  days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  years = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004];


  constructor(public router: Router) { }

  signup() {
    //this works
   // this.router.navigate(['../signup-page.']);
   this.continueCounter = 1;
  }

  ngOnInit(): void {
  }

}
