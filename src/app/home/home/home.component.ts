import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MakhanaDetail } from 'src/Model/model';
import { MakhanaService } from '../../home/makhana-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MakhanaDetail]
})

export class HomeComponent implements OnInit {
res: any;
lstMakhana: any = [];

constructor(private modal: NgbModal, private makhanaService: MakhanaService){}

  ngOnInit(): void {
    this.lstMakhana = this.makhanaService.getMakhanaList();
  }

  // tslint:disable-next-line:typedef
  addToCartClick(value: any, src: any){
    const makhna = new MakhanaDetail();
    makhna.Name = '₹ '+ value;
    makhna.Price = value;
    makhna.Description = 'This is the description of selected item.';
    makhna.Quantity = 1;
    makhna.Src = src;

    this.res = this.openModel(
      'AppComponent',
      makhna,
      'AddToCart',
      'Cart Items',
      'OK',
      'Cancle'
    );
  }

  // tslint:disable-next-line:typedef
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
