﻿import { Component, OnInit }        from '@angular/core';
import { AuthService }              from './auth.service';
//import { LoginService }             from './login.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/views/main.html'
})
export class AppComponent implements OnInit {

    public isLoggedIn: boolean;
    public titleLogin: string;

    //constructor(public loginService: LoginService) {
    //    this.isLoggedIn = false;
    //    this.titleLogin = 'Log In';
    //}
    constructor(public authService: AuthService) {
        this.isLoggedIn = false;
        this.titleLogin = 'Login';
    }

    ngOnInit() {
        //this.loginService.loginObservable.subscribe(x => {
        //    if (x) {
        //        this.isLoggedIn = true;
        //        this.currentUser = x;
        //        this.titleLogin = this.currentUser.profile.name;
        //    } else {
        //        this.isLoggedIn = false;
        //        this.currentUser = null;
        //    }
        //});

        this.authService.authContent.subscribe(x => {
            this.isLoggedIn = x.isAuthorized;
            if (this.isLoggedIn)
                this.titleLogin = x.getUserName();
            else
                this.titleLogin = "";

            if (!this.titleLogin)
                this.titleLogin = 'Login';
        });
    }

    public onLogin() {
        if (this.isLoggedIn) {
            //this.doLogout();
        } else {            
            this.doLogin();
        }
    }

    private doLogin() {
        console.log("Perform login logic");
        //this.loginService.Login();
        this.authService.Login();
    }

    private doLogout() {
        //console.log("Perform logout logic");
        //this.loginService.Logoff();
    }
}
