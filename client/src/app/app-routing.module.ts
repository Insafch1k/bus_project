import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { map } from 'rxjs';
import { BusComponent } from './pages/bus/bus.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title: 'home'
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'profile',
    component: ProfileComponent,
  },
  {
    path:'signup',
    component: SignupComponent,
  },
  {
    path:'map',
    component: MapComponent,
  },
  {
    path:'bus',
    component: BusComponent,
  },
  {
    path:'**',
    component: HomeComponent,
    redirectTo:'',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
