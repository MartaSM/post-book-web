import { UsersListComponent } from './components/user/users-list/users-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './components/user/user-login/user-login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'users', component: UsersListComponent }, 
  { path: 'login', component: UserLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
