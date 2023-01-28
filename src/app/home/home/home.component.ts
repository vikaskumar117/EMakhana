import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MakhanaDetail } from 'src/Model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MakhanaDetail]
})

export class HomeComponent implements OnInit {
res:any;
constructor(private modal: NgbModal, private makhnaDetails: MakhanaDetail){}

  ngOnInit(): void {
  }

  addToCartClick(value: any, src: any){
    this.makhnaDetails.Name = "₹ "+ value;
    this.makhnaDetails.Price = value;
    this.makhnaDetails.Description = "This is the description of selected item.";
    this.makhnaDetails.Quantity = 1;
    this.makhnaDetails.src = src;

     this.res = this.openModel(
      'AppComponent',
      this.makhnaDetails,
      'AddToCart',
      'Cart Items',
      'OK',
      'Cancle'
    );
  }

  openModel(from: any, data: any, type: any, title: any, button1text: any, button2txt?: any) {
    const modalRef = this.modal.open(DialogComponent, {
      backdrop: 'static',
    });
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.type = 'Cart Details';
    modalRef.componentInstance.title = 'cart items';
    modalRef.componentInstance.buttonOK = 'OK';
    if (button2txt !== '') {
      modalRef.componentInstance.buttonCancle = button2txt;
    }

    modalRef.result.then((response:any) => {
      if (response === 'ok') {
        console.log(`Dialog result: ${response}`);
      }
    });
  }

}
