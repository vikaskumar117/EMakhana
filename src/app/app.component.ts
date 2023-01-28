import { Component, OnInit } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { DialogComponent } from './shared/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'TestMakhana';
  res: any;

  constructor() { }
  // constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }
}

