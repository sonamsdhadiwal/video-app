import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../_services/alert.service';
import { AccountService } from 'src/app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css'],
  // providers: [LoginService]
})
export class SigninPageComponent implements OnInit,AfterViewInit {

  errMsg;

  submitted = false;
  loading = false;

  validation_messages = {
    email: [{ type: 'required', message: 'Email Id cannot be blank' }],
    password: [{ type: 'required', message: 'Password cannot be blank' }]
  };

  loginForm = this.formBuilder.group({
    email: ['',[Validators.required]],
    password: ['',Validators.required]
  })

  signinButtonEnabler: boolean;

  //loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public router: Router,
    private alertService: AlertService,
    private accountService: AccountService,
    private route: ActivatedRoute) {
    
    // this.signinForm = this.formBuilder.group({
    //   email: ''
    // });
   }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    if(this.loginForm.value['email'] !== '') {
      this.signinButtonEnabler = true;
    }
  }

   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }

  onLoginSubmit(loginForm) {
    console.log('Entered login form');
    const request = {
      Email: loginForm.value['email'],
     // Password: btoa(loginForm.value['password'])
     Password: loginForm.value['password']
    };
    //Match from service

    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();


    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.accountService.login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                // this.router.navigateByUrl(returnUrl);
                this.router.navigate(['signin/header']);
            },
            error: error => {
                this.alertService.error(error);
                this.loading = false;
            }
        });





    // if((request.Email === 'sonam@gmail.com') && (request.Password === 'sonam')) {
    //   this.router.navigate(['signin/header']);
    // } else  {
    //   console.log("String does not match");
    // }
  }

   // Login in user
  //  login(email: any, password: any){
  //   this.ls.login(email, password, false); 
// }

}
