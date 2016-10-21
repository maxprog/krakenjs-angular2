import { Component, Input, OnChanges } from '@angular/core';
import { User } from '../../user/user';
import { GithubProfileService } from '../../services/github-profile.service';

@Component({
    selector: 'githubprofile',
    template: `<div *ngIf="user" class="githubprofile">
        <div *ngIf="user.avatar_url">
            <a href="{{user.html_url}}">
                <img src="{{user.avatar_url}}" class="center-block img-responsive img-thumbnail" alt="{{user.name}}" width="200px"/>
            </a>
        </div>
        <h3 *ngIf="user.name" class="text-center">{{user.name}}</h3>
        <button *ngIf="user.name" (click)="onClick(user)" type="button" class="center-block btn btn-primary marg">{{buttonText}}</button>
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
    buttonText:string;

    constructor(private profileService:GithubProfileService) {}

    ngOnChanges():void {
        this.fetchProfileData();
    }

    onClick(user:User): void {

    }

    fetchProfileData():void {
        this.profileService
            .getProfile(this.username)
            .then(user => {
                this.user = user;
                this.buttonText = (this.user.inmemory) ? 'Edit Dashboard' : 'Build Dashboard';
            })
            .catch(error => console.log(error));//Replace the log with error handling
    }
}
