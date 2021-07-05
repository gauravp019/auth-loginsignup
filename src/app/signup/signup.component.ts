import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm = new FormGroup({});
  constructor(private router: Router, private alldata: AuthService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  signup(val) {
    console.log(val);
    this.alldata.signupList(val.name, val.email, val.password)
    this.router.navigate(['/login']);

  }
}
