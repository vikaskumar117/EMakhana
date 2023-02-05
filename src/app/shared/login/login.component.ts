import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  input: any;
  show: boolean = false;

  constructor(private router: Router) {
    this.input = {
      email: '',
      password: '',
    };
  }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  login() {
    if (this.input.email && this.input.password) {
      this.router.navigate(['/']);
    }
  }

  register(){
    //this.router.navigate(['/register']);
    this.show = true;
  }
}
