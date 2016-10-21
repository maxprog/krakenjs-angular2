import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <appheader></appheader>
        <main class="page-content" aria-label="Content">
            <div class="wrapper">
                <ul class="nav nav-pills pagenav">
                    <li role="presentation" routerLinkActive="active"><a routerLink="/home">Home</a></li>
                    <!--<li role="presentation" [class.disabled]="!routerLinkActive"><a href="#">Profile</a></li>
                    <li role="presentation" [class.disabled]="!routerLinkActive"><a href="#">Dashboard</a></li>-->
                </ul>
                <router-outlet></router-outlet>
          </div>
        </main>
        <appfooter></appfooter>
    `,
    styles: [`
        .pagenav {
            margin: 0 0 20px 0;
        }
    `
    ]

})
export class AppComponent {
}
