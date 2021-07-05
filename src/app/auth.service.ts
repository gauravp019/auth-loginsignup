import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userdata: AngularFireList<any>;
  constructor(private angularFireAuth: AngularFireDatabase) { }
  // getTaskList() {
  //   this.taskList = this.firebasedb.list('taskList');
  //   return this.taskList;
  // }
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
  }

  scanUser(email: string, password: string) {
    // var userdatas = this.angularFireAuth.list('AllLogins');
    console.log(email, password);

    console.log(this.userdata);

  }
}
