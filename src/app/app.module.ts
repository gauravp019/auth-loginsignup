import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestore,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
