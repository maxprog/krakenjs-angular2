import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Observable } from 'rxjs/Observable';

const GITHUB_API = 'https://api.github.com/users/';
const PROFILE_API = '/profile';

@Injectable()
export class GithubProfileService {

    constructor(private http:Http, private cookieService:CookieService) {}

    getProfileFromInMemory(username:string): Observable<User> {

        return this.http.get(`${PROFILE_API}?login=${username}`)
            .filter(resp => resp.status === 200)
            .map(resp => {
                let user = resp.json() as User
                user.inmemory = true;
                return user;
            })
            .catch(() => Observable.of(new User())); //Ignore API fetch errors and return an empty User object.
    }

    saveProfileToInMemory(user:User):Observable<User> {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${PROFILE_API}`, JSON.stringify(user), { headers: headers })
            .filter(resp => resp.status === 200)
            .map(resp => resp.json() as User)
            .catch(() => Observable.of(new User()));
    }

    getProfileFromGithub(username:string): Observable<User> {
        let token = this.cookieService.get('XSRF-TOKEN');
        //Remove the XSRF-TOKEN before Cross site Ajax call.
        this.cookieService.remove('XSRF-TOKEN');
        return this.http.get(`${GITHUB_API}${username}`)
            .filter(resp => resp.status === 200)
            .map(resp => {
                let user = resp.json() as User;
                //Reset the token after API call.
                this.cookieService.put('XSRF-TOKEN', token);
                //Persist the user details to inmemory db
                this.saveProfileToInMemory(user);
                return user;
            })
            .catch(() => Observable.of(new User())); //Ignore API fetch errors and return an empty User object.
    }

    getProfile(username:string):Observable<User> {
        if(!username) {
            //If no username return an empty User
            return Observable.of(new User());
        }
        //First call the internal API to get the inmemory db data.
        return this.getProfileFromInMemory(username)
            .map(user => {
                if (user && user.login) {
                    //If the Internal API call found the user, return the value
                    return user;
                }
                //get the profile data from guthub
                return this.getProfileFromGithub(username)
            })
            //get the profile data from guthub
            .catch(() => this.getProfileFromGithub(username))
    }
}
