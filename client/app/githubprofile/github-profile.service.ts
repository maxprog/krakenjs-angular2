import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { Http } from '@angular/http';

//The Angular http.get returns an RxJS Observable. However, the Angular Observable doesn't have a toPromise operator ... not out of the box. The Angular Observable is a bare-bones implementation.
//Import the operator from the RxJS library
import 'rxjs/add/operator/toPromise';

const GITHUB_API = 'https://api.github.com/users/';

@Injectable()
export class GithubProfileService {

    constructor(private http:Http) {}

    getProfile(username:string):Promise<User> {
        if (username) {
            return this.http.get(`${GITHUB_API}${username}`)
                .filter(resp => resp.status === 200)
                .toPromise()
                .then(resp => resp.json() as User)
                .catch(error => Promise.resolve(new User())); //Ignore API fetch errors and return an empty User object.
        } else {
            //If no username return an empty User
            return Promise.resolve(new User());
        }
    }
}
