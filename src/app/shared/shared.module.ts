import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  entryComponents: [],
  exports: [FooterComponent]
})
export class SharedModule { }
