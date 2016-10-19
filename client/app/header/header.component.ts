import { Component } from '@angular/core';

@Component({
    selector: 'appheader',
    template: `
    <header class="site-header" role="banner">
      <div class="wrapper">
        <a class="site-title" href="/">{{title}}</a>
        <nav class="site-nav">
            <span class="menu-icon">
            <svg viewBox="0 0 18 15" width="18px" height="15px">
              <path fill="#424242" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"/>
              <path fill="#424242" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"/>
              <path fill="#424242" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"/>
            </svg>
            </span>
            <div *ngIf="pages" class="trigger">
                <a *ngFor="let page of pages" class="page-link" href="{{page.url}}">{{page.title}}</a>
            </div>
        </nav>
      </div>
    </header>
    `
})
export class HeaderComponet {
    title = 'Krakenjs-Angular2 example app';
    pages = [
        {
            title: 'KrakenJs',
            url: 'http://krakenjs.com/'
        },
        {
            title: 'Angular2',
            url: 'https://angular.io/'
        },
        {
            title: 'Webpack',
            url: 'https://webpack.github.io/'
        }
    ];
}
