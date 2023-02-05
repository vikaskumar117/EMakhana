import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 input: any;
 show: boolean = true;

  public constructor(private router: Router) {
      this.input = {
          "name": "",
          "email": "",
          "password": ""
      };
    }

  ngOnInit(): void {
  }

  register(){
   console.log('registered');
  }

  login(){
    this.show = false;
    this.router.navigate(['/login']);
  }
}
