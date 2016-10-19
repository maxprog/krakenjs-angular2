import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponet } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponet, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
