import { Component } from '@angular/core';


@Component({
    selector: 'githubuser',
    template: `
        <div class="githubuser">
            <h1>Hi {{displayname}}</h1>
            <h2>Welcome to Krakenjs Angular2 example application!</h2>
            <p>This application illustates, building an enhanced <strong>Profile</strong> and <strong>Dashboard</strong> page for Github users. This application uses an <i>in-memory</i> database to store additional profile and dashboard metrics. No data gets posted (or updated) to your public github page.</p>
            <p>Enter your github username to fetch, public github details.</p>
            <form>
                <label for="gh-username">Github username</label>
                <input #inputname (keyup)="onKeyUp(inputname.value)" [(ngModel)]="displayname" placeholder="Github username" class="form-control" id="gh-username" type="text" name="gh-username"/>
                <!--<button (click)="onClick(inputname.value)" type="button" class="btn btn-primary marg">Verify Github Profile</button>-->
                <githubprofile [username]="username"></githubprofile>
            </form>
        </div>
    `,
    styles: [`
        button.marg {
            margin: 20px 0 20px 0;
        }`
    ]
})
export class GithubUserComponent {
    username:string = '';
    constructor(){}
    onKeyUp(inputname):void {
        this.username = inputname;
    }
}
