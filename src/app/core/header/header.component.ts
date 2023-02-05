import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarComponent } from 'src/app/sidebar/sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: SidebarComponent;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openSideBarClick() {
    console.log('clicked');
    this.sidebar.show();
  }
  closeSideBarClick() {
    this.sidebar.hide();
  }

  contactUs() {
    this.router.navigate(['/contactus']);
  }
  home() {
    this.router.navigate(['/']);
  }
  login(){
    this.router.navigate(['/login']);
  }
}
