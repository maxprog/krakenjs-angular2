import { Component,OnInit } from '@angular/core';
import { GithubProfileService } from '../../services/github-profile.service';
import { User } from '../../user/user';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'dash',
    template: `
    <div class="container-fluid" *ngIf="user">
        <div *ngFor="let userData of user| async; let i = index" class="profile">
            <div class="thumbnail">
                <div class="prf-pdng" *ngIf="userData.avatar_url">
                    <a href="{{userData?.html_url}}">
                        <img src="{{userData?.avatar_url}}" alt="{{userData?.name}}" width="150px"/>
                    </a>
                </div>
                <div class="caption" *ngIf="userData.name">
                    <strong>{{userData?.name}}</strong>
                </div>
            </div>
        </div>
    </div>
    `,
    styles: [`
        .prf-pdng {
            margin: 20px 0 20px 0;
        }
        .profile {
            margin-bottom: 20px;
        }
    `]
})
export class GithubDashComponent implements OnInit{

    user:Observable<User[]>;

    constructor(private profileService:GithubProfileService) {

    }

    ngOnInit():void {
        this.user = this.profileService.getAllProfile();
    }
}
