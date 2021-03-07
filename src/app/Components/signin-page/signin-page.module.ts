import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ChatPageComponent } from './Components/chat-page/chat-page.component';
import { MeetingsPageComponent } from './Components/meetings-page/meetings-page.component';
import { ContactsPageComponent } from './Components/contacts-page/contacts-page.component';
import { RouterModule } from '@angular/router';
import { RegistrationPageComponent } from '../registration-page/registration-page.component';
import { SignupPageComponent } from './Components/signup-page/signup-page.component';
import { SignupConfirmationPageComponent } from './Components/signup-page/signup-confirmation-page/signup-confirmation-page.component';
import { SigninPageComponent } from './Components/signin-page/signin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ChatPageComponent,
    MeetingsPageComponent,
    ContactsPageComponent,
    RegistrationPageComponent,
    SignupPageComponent,
    SignupConfirmationPageComponent,
    SigninPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'registration',
        component: RegistrationPageComponent
      },

      // {
      //   path: 'home',
      //   component: HomePageComponent
      // },
      // {
      //   path: 'chat',
      //   component: ChatPageComponent
      // },
      // {
      //   path: 'meeting',
      //   component: MeetingsPageComponent
      // },
      // {
      //   path: 'contact',
      //   component: ContactsPageComponent
      // },
      {
        path: 'signin/signup',
        component: SignupConfirmationPageComponent
       // redirectTo: 'signin',
       // pathMatch: 'full'
      },
    //   {
    //     path: '**',
    //     component: HomePageComponent, //create pagenot found
    //    }
    ]),
   // AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
