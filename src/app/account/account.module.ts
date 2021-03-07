import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { SigninPageComponent } from '../Components/signin-page/signin-page.component';
import { SignupPageComponent } from '../Components/signup-page/signup-page.component';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        LayoutComponent,
        RegisterComponent,
        SigninPageComponent,
        SignupPageComponent
    ]
})
export class AccountModule { }