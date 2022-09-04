import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@modules/auth/pages/login-page/login-page.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent,
    loadChildren:()=>import('../app/modules/home/home.module').then(m=>m.HomeModule),
  },
  {
    path:'auth',
    component:LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
