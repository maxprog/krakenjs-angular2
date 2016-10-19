import { Component } from '@angular/core';

@Component({
    selector: 'githubuser',
    template: `
        <div>
            <h1>Hi {{username}}</h1>
            <h2>Welcome to Krakenjs Angular2 example application!</h2>
            <form>
                <label for="gh-username">Github username</label>
                <input (keyup)="onKeyUp()" [(ngModel)]="username" placeholder="Github username" class="form-control" id="gh-username" type="text" name="gh-username"/>
            </form>
        </div>
    `
})
export class GithubUserComponent {
    username:string = '';
    onKeyUp(ev):void {
        console.log("==ev", ev);
    }
}
