import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({});
  x: any = [];
  constructor(private router: Router, private alldata: AuthService) {

  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }


  login(val) {
    this.alldata.allData().snapshotChanges().subscribe(r => {
      console.log(r);
      r.forEach(element => {
        console.log(element)   //here element is object
        this.x = element.payload.toJSON();
        console.log(this.x) //now in string
        if (val.email == 'admin' || val.password == 'admin') {
          this.router.navigate(['/admin-dashboard']);
          this.alldata.isloggedIn = false;


        }
        else if (this.x.email == val.email && this.x.password == val.password) {
          this.alldata.isloggedIn = true;
          this.router.navigate(['/dashboard']);
        } else {
          this.alldata.isloggedIn = false;

        }

      })
    })
  }
}
