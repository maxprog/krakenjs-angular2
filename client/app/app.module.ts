import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponet } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GithubUserComponent } from './githubuser/github-user.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponet, FooterComponent, GithubUserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
