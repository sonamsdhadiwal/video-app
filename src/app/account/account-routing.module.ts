import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { RegisterComponent } from './register.component';
import { SigninPageComponent } from '../Components/signin-page/signin-page.component';
import { SignupPageComponent } from '../Components/signup-page/signup-page.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'login', component: SigninPageComponent },
            { path: 'register', component: SignupPageComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }