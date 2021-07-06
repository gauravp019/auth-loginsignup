import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userdata: AngularFireList<any>;
  public isloggedIn: boolean;

  constructor(private angularFireAuth: AngularFireDatabase) { }
  isuserrights(): boolean {
    return true;
  }
  allData() {
    this.userdata = this.angularFireAuth.list('AllLogins');
    return this.userdata
  }
  signupList(name: string, email: string, password: string) {
    this.userdata = this.angularFireAuth.list('AllLogins');
    console.log(name, email, password);
    this.userdata.push({
      name: name,
      email: email,
      password: password
    })
    return false;

  }

}
