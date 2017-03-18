import { Component } from "angular2/core";
import { UserModel } from "./UserModel";
import { UserService } from "./UserService";
import {Ellipsis} from './Ellipsis';


@Component({
    selector: "userform",
    providers: [UserService],
    pipes: [Ellipsis],
    template: `
    <div *ngIf='show'>Please wait.....</div>
    <div class="form-group-xs">
        First Name:- <input class='form-control' [(ngModel)] = 'user.firstName'/>
        Age:- <input type='number' class='form-control' [(ngModel)] = 'user.age'/>

        Gender:- 
        <input #male type='radio' name="gender" [ngModel] = 'user.genderVal' 
            value='Male' (click)='user.genderVal = male.value'  /> Male

        <input #female type='radio' name="gender" [ngModel] = 'user.genderVal'
            value='Female' (click)='user.genderVal = female.value' /> Female
        
        Skills:-    
        <input #javacb type="checkbox" (change) ="user.skills[0] = javacb.checked?'Java':false"/> Java
        <input #angularcb type="checkbox" (change) ="user.skills[1] = angularcb.checked?'Angular':false"/> Angular
        <input #devopscb type="checkbox" (change) ="user.skills[2] = devopscb.checked?'DevOps':false"/> DevOps
        
        <button class='btn btn-default' (click)='save()'>Save</button>
    </div>
    <ol>
        <li *ngFor='#i=index #user of users '>
            {{user.firstName |uppercase |ellipsis :5 :'*'}}  {{user.age}}  {{user.genderVal}} 
            <span *ngFor=' #skill of user.skills'>
                {{skill}}
            </span>
            <button  class='btn btn-default' (click)='deleteUser(i)'>X</button>
        </li>
    </ol>

    `
})

export class Userform {
    private user: UserModel = new UserModel();
    private users: UserModel[] = [];
    private show:boolean;

    constructor(public userService: UserService) {
        this.user.firstName = 'John';
        this.user.age = 38;
        this.user.genderVal = 'Male';
    }

    errorHandler = ()=>{
        this.show = !this.show;
        console.error(arguments);
    }
    save() {
        var observable = this.userService.save(Object.assign(this.user));
        this.show = !this.show;
        observable.subscribe(function () {
            console.log("Success");
            console.log(arguments);
        }, this.errorHandler)
        console.log("+++++++++++++++++++ " + this.user.skills[0] + " ++++++++++++++++++====");
        console.log(this.user.firstName + " is working and age is " + this.user.age);
        //this.users.push(Object.assign({}, this.user));
        this.users.push(this.user);
        this.user = new UserModel();
    }

    deleteUser(index: number) {
        var deleteObservable = this.userService.delete(index);
        deleteObservable.subscribe(
            function(){
                console.log('deleted');
            },function(){
                console.error(arguments);
            }
        )
        console.log("Delete for " + index + " .");
        this.users.splice(index, 1)
    }
}