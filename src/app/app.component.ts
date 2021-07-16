import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') form:NgForm

  user:{username:string, email:string, secret:string}[] = [];
  suggestUserName(){
    const suggestUsername = 'Super User';
  }

  onSubmit(){
    console.log(this.form)

    if(this.form.valid === true){
      console.log('Form Submited !')
    } else {
      alert('Invalid Detail !')
    }
  }
  // onSubmit(f:NgForm){
  //   console.log(f.value)
  //   this.user.push(f.value.username, f.value.email,f.value.secret)
  //   console.log(this.user)
  // }
}
