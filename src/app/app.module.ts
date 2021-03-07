// // import { BrowserModule } from '@angular/platform-browser';
// // import { NgModule } from '@angular/core';

// // import { AppRoutingModule } from './app-routing.module';
// // import { AppComponent } from './app.component';

// // @NgModule({
// //   declarations: [
// //     AppComponent
// //   ],
// //   imports: [
// //     BrowserModule,
// //     AppRoutingModule
// //   ],
// //   providers: [],
// //   bootstrap: [AppComponent]
// // })
// // export class AppModule { }


// // import { BrowserModule } from '@angular/platform-browser';
// // import { NgModule } from '@angular/core';
// // import { AppRoutingModule } from './app-routing.module';
// // import { HttpClientModule } from '@angular/common/http';
// // import { AppComponent } from './app.component';
// // import { ReactiveFormsModule } from '@angular/forms';
// // import { SigninPageModule } from './Components/signin-page/signin-page.module';


// // @NgModule({
// //   declarations: [AppComponent],
// //   imports: [
// //     BrowserModule,
// //     AppRoutingModule,
// //     ReactiveFormsModule,
// //     HttpClientModule,
// //    // StoreModule.forRoot(reducers),
// //    // !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
// //     //SigninPageModule.forRoot(environment),
// //    // SharedUIModule.forRoot(environment)
// //   ],
// //   bootstrap: [AppComponent],
// // })
// // export class AppModule {
// // }







// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
// //import { AppRoutingModule } from './app-routing.module';

// import { AppComponent } from './app.component';
// import { HeaderComponent } from './Components/header/header.component';
// import { HomePageComponent } from './Components/home-page/home-page.component';
// import { ChatPageComponent } from './Components/chat-page/chat-page.component';
// import { MeetingsPageComponent } from './Components/meetings-page/meetings-page.component';
// import { ContactsPageComponent } from './Components/contacts-page/contacts-page.component';
// import { RouterModule } from '@angular/router';
// import { RegistrationPageComponent } from './Components/registration-page/registration-page.component';
// import { SignupPageComponent } from './Components/signup-page/signup-page.component';
// import { SignupConfirmationPageComponent } from './Components/signup-page/signup-confirmation-page/signup-confirmation-page.component';
// import { SigninPageComponent } from './Components/signin-page/signin-page.component';
// //import { TestComponent } from './Components/test/test.component';
// //import { WebcamModule } from 'ngx-webcam';
// //import { ModalComponent } from './Components/modal/modal.component';
// //import { AudioDetectComponent } from './Components/audio-detect/audio-detect.component';
// //import { SpeechService } from './Components/audio-detect/speech.service';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AccountService, AlertService } from './_services';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// // used to create fake backend
// //import { fakeBackendProvider } from './_helpers';

// import { JwtInterceptor, ErrorInterceptor } from './_helpers';


// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     HomePageComponent,
//     ChatPageComponent,
//     MeetingsPageComponent,
//     ContactsPageComponent,
//     RegistrationPageComponent,
//     SignupPageComponent,
//     SignupConfirmationPageComponent,
//     SigninPageComponent,
//     // TestComponent,
//     // ModalComponent,
//     // AudioDetectComponent
//   ],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     ReactiveFormsModule,
//     FormsModule,
//     HttpClientModule,
//   //  WebcamModule,
//     RouterModule.forRoot([
//       {
//         path: 'signin',
//        // component: SigninPageComponent,
//         children: [
//           {
//             path: '',
//             component: SigninPageComponent
//           },
//           {
//             path: 'registration',
//             component: RegistrationPageComponent
//           },
//           {
//             path: 'header',
//             component: HeaderComponent,
//             children: [ {
//               path: 'home',
//               component: HomePageComponent,
//             },
//             {
//               path: 'chat',
//               component: ChatPageComponent
//             },
//             {
//               path: 'meeting',
//               component: MeetingsPageComponent
//             },
//             {
//               path: 'contact',
//               component: ContactsPageComponent
//             },
//             // {
//             //   path: 'test',
//             //   component: TestComponent,
//             //   children: [ {
//             //     path: 'modal',
//             //     component: ModalComponent
//             //   }]
//             // }
//           ]
//           },
//         ]
//       },
//       {
//         path: '',
//         redirectTo: 'signin',
//         pathMatch: 'full'
//       },
//     ]),
//   ],
//   providers: [
//   //  SpeechService,
//   { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
//   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
//import { AlertComponent } from '../app/';
import { HomePageComponent } from './Components/home-page/home-page.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
    //    AlertComponent,
      HomePageComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
       // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };

