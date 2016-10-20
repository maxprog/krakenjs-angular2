import { Component, Input, OnChanges } from '@angular/core';
import { User } from '../user/user';
import { GithubProfileService } from './github-profile.service';

@Component({
    providers: [
        GithubProfileService
    ],
    selector: 'githubprofile',
    template: `<div *ngIf="user" class="githubprofile">
        <div *ngIf="user.avatar_url">
            <a href="{{user.html_url}}">
                <img src="{{user.avatar_url}}" class="center-block img-responsive img-thumbnail" alt="{{user.name}}" width="200px"/>
            </a>
        </div>
        <h3 *ngIf="user.name" class="text-center">{{user.name}}</h3>
    </div>`,
    styles: [`
        .githubprofile {
            margin: 20px;
        }
    `]
})
export class GithubProfileComponent implements OnChanges {
    @Input()
    username:string;

    user:User;

    constructor(private profileService:GithubProfileService) {}

    ngOnChanges():void {
        this.fetchProfileData();
    }

    fetchProfileData():void {
        this.profileService
            .getProfile(this.username)
            .then(user => this.user = user)
            .catch(error => console.log(error));//Replace the log with error handling
    }
}
