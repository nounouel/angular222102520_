import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "login", component: LoginComponent},
  {path: "", redirectTo:"login", pathMatch:"full" },
  {path: "register", component: RegisterComponent},
  {path: "admin", component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}