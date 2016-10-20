import { Component } from '@angular/core';

@Component({
    selector: 'githubuser',
    template: `
        <div class="githubuser">
            <h1>Hi {{displayname}}</h1>
            <h2>Welcome to Krakenjs Angular2 example application!</h2>
            <form>
                <label for="gh-username">Github username</label>
                <input [(ngModel)]="displayname" #inputname placeholder="Github username" class="form-control" id="gh-username" type="text" name="gh-username"/>
                <button (click)="onClick(inputname.value)" type="button" class="btn btn-primary marg">Show Github Profile</button>
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
    onClick(inputname):void {
        this.username = inputname;
    }
}
