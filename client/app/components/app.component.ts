import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <appheader></appheader>
        <main class="page-content" aria-label="Content">
          <div class="wrapper">
            <githubuser></githubuser>
          </div>
        </main>
        <appfooter></appfooter>
    `
})
export class AppComponent {
}
