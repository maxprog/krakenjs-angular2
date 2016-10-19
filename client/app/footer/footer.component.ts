import { Component } from '@angular/core';

@Component({
    selector: 'appfooter',
    template:
    `
    <footer class="site-footer">
        <div class="wrapper">
            <h2 class="footer-heading">Created By: {{author}}</h2>
                <div class="footer-col-wrapper">
                  <div class="footer-col footer-col-1">
                    <ul class="contact-list">
                      <li>
                        <li><a href="mailto:{{email}}">{{email}}</a></li>
                    </ul>
                  </div>
                </div>
        </div>
    </footer>
    `
})
export class FooterComponent {
    author = 'Subeesh Chothendavida';
    email = 'subeeshcbabu@yahoo.co.in';
}
