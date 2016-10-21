import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';

//The Angular http.get returns an RxJS Observable. However, the Angular Observable doesn't have a toPromise operator ... not out of the box. The Angular Observable is a bare-bones implementation.
//Import the operator from the RxJS library
import 'rxjs/add/operator/toPromise';

const GITHUB_API = 'https://api.github.com/users/';
const PROFILE_API = '/profile';

@Injectable()
export class GithubProfileService {

    constructor(private http:Http, private cookieService:CookieService) {}

    getProfileFromInMemory(username:string): Promise<User> {

        return this.http.get(`${PROFILE_API}?login=${username}`)
            .filter(resp => resp.status === 200)
            .toPromise()
            .then(resp => {
                let user = resp.json() as User
                user.inmemory = true;
                return user;
            })
            .catch(() => Promise.resolve(new User())); //Ignore API fetch errors and return an empty User object.
    }

    saveProfileToInMemory(user:User):Promise<User> {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(`${PROFILE_API}`, JSON.stringify(user), { headers: headers })
            .filter(resp => resp.status === 200)
            .toPromise()
            .then(resp => resp.json() as User)
            .catch(() => Promise.resolve(new User()));
    }

    getProfileFromGithub(username:string): Promise<User> {
        let token = this.cookieService.get('XSRF-TOKEN');
        //Remove the XSRF-TOKEN before Cross site Ajax call.
        this.cookieService.remove('XSRF-TOKEN');
        return this.http.get(`${GITHUB_API}${username}`)
            .filter(resp => resp.status === 200)
            .toPromise()
            .then(resp => {
                let user = resp.json() as User;
                //Reset the token after API call.
                this.cookieService.put('XSRF-TOKEN', token);
                //Persist the user details to inmemory db
                this.saveProfileToInMemory(user);
                return user;
            })
            .catch(() => Promise.resolve(new User())); //Ignore API fetch errors and return an empty User object.
    }

    getProfile(username:string):Promise<User> {
        if(!username) {
            //If no username return an empty User
            return Promise.resolve(new User());
        }
        //First call the internal API to get the inmemory db data.
        return this.getProfileFromInMemory(username)
            .then(user => {
                if (user && user.login) {
                    //If the Internal API call found the user, return the value
                    return Promise.resolve(user);
                }
                //get the profile data from guthub
                return this.getProfileFromGithub(username)
            })
            //get the profile data from guthub
            .catch(() => this.getProfileFromGithub(username))
    }
}
