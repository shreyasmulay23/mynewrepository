import { Component } from "angular2/core";
import { bootstrap } from "angular2/platform/browser";
import { HTTP_BINDINGS } from "angular2/http";
import { Userform } from "./Userform";



@Component({
    selector: "my-app",
    template: `<h1>My Angular 2 App Shreyas</h1>
    <userform></userform>`,
    directives: [Userform]

})

export class AppComponent { }

bootstrap(AppComponent, [HTTP_BINDINGS]).catch(console.error);