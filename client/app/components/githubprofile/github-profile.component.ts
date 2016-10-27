import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { User } from '../../user/user';
import { GithubProfileService } from '../../services/github-profile.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'githubprofile',
    template: `<div *ngFor="let userData of user | async" class="profile">
        <div class="prf-pdng" *ngIf="userData.avatar_url">
            <a href="{{userData?.html_url}}">
                <img src="{{userData?.avatar_url}}" [class.center-block]="!profilePage" class="img-responsive img-thumbnail" alt="{{userData?.name}}" width="200px"/>
            </a>
        </div>
        <h3 *ngIf="userData.name" [class.text-center]="!profilePage">{{userData?.name}}</h3>
        <button *ngIf="userData.login && !profilePage" (click)="onClick(userData)" type="button" class="center-block btn btn-primary marg">{{userData?.inmemory ? "Edit Profile" : "Build Profile"}}</button>
        <div *ngIf="userData.login && profilePage" class="prf-pdng">
            <h4 *ngIf="userData.blog">Blog : <a href="{{userData.blog}}">{{userData.blog}}</a></h4>
            <h4 *ngIf="userData.location">Location : {{userData.location}}</h4>
            <h4 *ngIf="userData.company">Company : {{userData.company}}</h4>
            <img src="//logo.clearbit.com/{{userData.company}}.com?size=80">
        </div>
    </div>`,
    styles: [`
        .prf-pdng {
            margin: 20px 0 20px 0;
        }
        .profile {
            margin-bottom: 20px;
        }
    `]
})
export class GithubProfileComponent implements OnInit,OnChanges {
    @Input()
    username:string;

    //Subject to handle the keypress events to
    keywords = new Subject<string>();
    profilePage = false;
    user:Observable<User[]>;
    buttonText:string;

    constructor(
        private profileService:GithubProfileService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) {}

    ngOnChanges():void {
        this.profilePage = false;
        this.keywords.next(this.username);
    }

    ngOnInit():void {
        //If there is parameter matching 'login' - render the component
        //as part of the profile page.
        this.route.params.forEach((param:Params) => {
            let login = param['login'];
            if (login) {
                this.profilePage = true;
                this.user = this.fetchProfileData(login);
            }
        });
        //The keystrokes (input changes) are debounced and controlled to make fewer calls to service APIs.
        if (!this.profilePage) {
            this.user = this.keywords
                .debounceTime(500)
                .distinctUntilChanged()
                .switchMap(keyword => this.fetchProfileData(keyword));
        }
    }

    onClick(userData:User): void {
        let link = [ '/profile', userData.login ];
        this.router.navigate(link);
    }

    fetchProfileData(login:string):Observable<User[]> {
        return this.profileService
            .getProfile(login)
            .map(user => [user]);
    }
}
