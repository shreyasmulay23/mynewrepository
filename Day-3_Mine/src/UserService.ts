import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { UserModel } from './UserModel';

@Injectable()
export class UserService {
    constructor(public http: Http) {

    }
    save(user: UserModel): any {
        var observable = this.http.post("http://localhost:8080/", JSON.stringify(user));
        //var observable = this.http.get("http://localhost:8080/");
        return observable;
    }

    delete(id: number ): any{
        var deleteObservable = this.http.delete("http://localhost:8080/user/"+id+"/delete");
        return deleteObservable;
    }
}