import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {GithubUsers} from '../../providers/github-users/github-users';
import {User} from '../../models/user';

/*
  Generated class for the UserDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/user-details/user-details.html',
  //Add GithubUsers provider
  providers: [GithubUsers]
})
export class UserDetailsPage {
  user: User = new User;
  login: string;

  constructor(private navCtrl: NavController, private navParams: NavParams, private githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    // Get the user details and log
    githubUsers.loadDetails(this.login)
      .then( user => console.log(user)
      );
  }

}
