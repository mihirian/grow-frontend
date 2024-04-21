import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PanVerificationComponent } from './components/pan-verification/pan-verification.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent 
   
  },
  {
    path:'panVerification',component:PanVerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
