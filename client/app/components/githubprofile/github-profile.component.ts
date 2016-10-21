import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { User } from '../../user/user';
import { GithubProfileService } from '../../services/github-profile.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'githubprofile',
    template: `<div *ngIf="user" class="githubprofile">
        <div *ngIf="user.avatar_url">
            <a href="{{user.html_url}}">
                <img src="{{user.avatar_url}}" class="center-block img-responsive img-thumbnail" alt="{{user.name}}" width="200px"/>
            </a>
        </div>
        <h3 *ngIf="user.name" class="text-center">{{user.name}}</h3>
        <button *ngIf="user.name && !profilePage" (click)="onClick(user)" type="button" class="center-block btn btn-primary marg">{{buttonText}}</button>
    </div>`,
    styles: [`
        .githubprofile {
            margin: 20px;
        }
    `]
})
export class GithubProfileComponent implements OnInit,OnChanges {
    @Input()
    username:string;

    profilePage = false;
    user:User;
    buttonText:string;

    constructor(
        private profileService:GithubProfileService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) {}

    ngOnChanges():void {
        this.fetchProfileData(this.username);
    }

    ngOnInit():void {
        this.route.params.forEach((param:Params) => {
            let login = param['login'];
            if (login) {
                this.profilePage = true;
                this.fetchProfileData(login);
            }
        });
    }

    onClick(user:User): void {
        let link = [ '/profile', user.login ];
        this.router.navigate(link);
    }


    fetchProfileData(login):void {
        this.profileService
            .getProfile(login)
            .then(user => {
                this.user = user;
                this.buttonText = (this.user.inmemory) ? 'Edit Profile' : 'Build profile';
            })
            .catch(error => console.log(error));//Replace the log with error handling
    }
}
