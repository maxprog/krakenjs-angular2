//Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from  '@angular/router';
//Components
import { AppComponent } from './components/app.component';
import { HeaderComponet } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GithubUserComponent } from './components/githubuser/github-user.component';
import { GithubProfileComponent } from './components/githubprofile/github-profile.component'
import { GithubDashComponent } from './components/githubdash/github-dash.component';
//Services
import { GithubProfileService } from './services/github-profile.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: 'home',
                component: GithubUserComponent
            },
            {
                path: 'dashboard',
                component: GithubDashComponent
            },
            {
                path: 'profile/:login',
                component: GithubProfileComponent
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            }
        ])
    ],
    declarations: [
        AppComponent,
        HeaderComponet,
        FooterComponent,
        GithubUserComponent,
        GithubProfileComponent,
        GithubDashComponent
    ],
    providers: [
        GithubProfileService,
        CookieService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
