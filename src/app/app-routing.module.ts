import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { StatisticComponent } from './statistic/statistic.component';
import { CapabilityComponent } from './capability/capability.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'statistic', component: StatisticComponent, canActivate: [AuthGuard] },
  { path: 'capability', component: CapabilityComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
