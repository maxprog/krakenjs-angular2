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

        // let user = new User()
        // //Mock data. Replace this with service call.
        // user.name = 'subeesh babu';
        // user.login = username;
        // user.id = 1707119;
        // user.avatar_url = "https://avatars.githubusercontent.com/u/1707119?v=3";
        // user.html_url = "https://github.com/subeeshcbabu";
        if (username) {
            return this.http.get(`${GITHUB_API}${username}`)
                .filter(resp => resp.status === 200)
                .toPromise()
                .then(resp => {
                    console.log('==>', username, resp.json());
                    return resp.json() as User
                })
                .catch(error => Promise.resolve(new User()));
        } else {
            return Promise.resolve(new User());
        }

    }
}
