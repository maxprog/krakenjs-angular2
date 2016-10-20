//Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Components
import { AppComponent } from './app.component';
import { HeaderComponet } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GithubUserComponent } from './githubuser/github-user.component';
import { GithubProfileComponent } from './githubprofile/github-profile.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeaderComponet,
        FooterComponent,
        GithubUserComponent,
        GithubProfileComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
