import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
   //constructor() {}
   constructor(private modal: NgbActiveModal) {}

  @Input() data: any;
  @Input() type: any;
  @Input() title: any;
  @Input() buttonOK: any;
  @Input() buttonCancle: any;
  quantity: number;
  subTotal: number;

  ngOnInit(): void {
    this.quantity = this.data.Quantity;
    this.subTotal = this.data.Price * this.data.Quantity;
  }

  calculateSubTotal(quantity: number){
    this.subTotal = this.data.Price * quantity;
  }

  open(value: any){
    this.modal.close(false);
  }

  close(value: any){
    this.modal.close();
  }

  dismiss() {
    this.modal.dismiss();
  }
}
