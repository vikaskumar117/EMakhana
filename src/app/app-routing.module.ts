import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ContactusComponent } from './shared/contactus/contactus.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {path: '*', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '*path', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {    }
