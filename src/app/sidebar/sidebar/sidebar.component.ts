import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   sidebar: boolean = false;
   isOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.isOpen = true;
  }
  hide(){
    this.isOpen = !this.isOpen;
  }
}
