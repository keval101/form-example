import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') form:NgForm;
  defaultQuestion = 'pet';
  reply = '';
  genders = ['Male', 'Female'];

  submitted = false;

  userDetail = {
    userName:'',
    email:'',
    secret:'',
    secretAns:'',
    gender:'',
  }

  user:{username:string, email:string, secret:string}[] = [];
  suggestUserName(){
    const suggestUsername = 'Super User';
    // this.form.setValue({
    //   userData:{
    //     username: "SuperUser",
    //     email:''                    ///Bdha ni Value Apvi Pade
    //   },
    //   secret:'pet',
    //   gender: 'Male'

    // })

    this.form.form.patchValue({
      userData:{
        username:'Super User'
      }
    })
  }

  onSubmit(){
    console.log(this.form)
    this.submitted = true;
    this.userDetail.userName = this.form.value.userData.username;
    this.userDetail.email = this.form.value.userData.email;
    this.userDetail.secret = this.form.value.secret;
    this.userDetail.secretAns = this.form.value.reply;
    this.userDetail.gender = this.form.value.gender;

    this.form.reset();
  }
  // onSubmit(f:NgForm){
  //   console.log(f.value)
  //   this.user.push(f.value.username, f.value.email,f.value.secret)
  //   console.log(this.user)
  // }
}
