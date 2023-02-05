import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [FooterComponent, ContactusComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  entryComponents: [],
  exports: [FooterComponent]
})
export class SharedModule { }
