import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from 'src/app/sidebar/sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: SidebarComponent;
  constructor() { }

  ngOnInit(): void {
  }

 openSideBarClick() {
    console.log("clicked");
    this.sidebar.show();
}
  closeSideBarClick() {
    this.sidebar.hide();
  }

}
