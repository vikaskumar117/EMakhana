import { Injectable } from '@angular/core';
import { MakhanaDetail } from 'src/Model/model';

@Injectable({
  providedIn: 'root'
})
export class MakhanaService {
  lstMakhana: Array<MakhanaDetail> = [];

  constructor() { }

  getMakhanaList(){
    let mkhana = new MakhanaDetail();
    mkhana.Price = '700';
    mkhana.Name = '₹ 700';
    mkhana.Description = 'Makhana is a type of seed derived from the Euryale ferox plant. They\'re also sometimes referred to as fox nuts or lotus seeds. Makhanas are widely cultivated throughout Asia and often used in traditional forms of medicine to treat various conditions';
    mkhana.Src = 'assets/makhana/M700.jpg';
    this.lstMakhana.push(mkhana);

    mkhana = new MakhanaDetail();
    mkhana.Price = '600';
    mkhana.Name = '₹ 600';
    mkhana.Description = 'Makhana is a type of seed derived from the Euryale ferox plant. They\'re also sometimes referred to as fox nuts or lotus seeds. Makhanas are widely cultivated throughout Asia and often used in traditional forms of medicine to treat various conditions';
    mkhana.Src = 'assets/makhana/M600.jpg';
    this.lstMakhana.push(mkhana);

    mkhana = new MakhanaDetail();
    mkhana.Price = '500';
    mkhana.Name = '₹ 500';
    mkhana.Description = 'Makhana is a type of seed derived from the Euryale ferox plant. They\'re also sometimes referred to as fox nuts or lotus seeds. Makhanas are widely cultivated throughout Asia and often used in traditional forms of medicine to treat various conditions';
    mkhana.Src = 'assets/makhana/M500.jfif';
    this.lstMakhana.push(mkhana);

    return this.lstMakhana;
  }
}
