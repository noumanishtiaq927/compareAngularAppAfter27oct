import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from '../dashboard/users/all-users/all-users.component';
import { RegisterFormComponent } from '../forms/register-form/register-form.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent , children: [

  {
    path: 'allusers',
    component: AllUsersComponent,
  },
  {
    path: 'adduser',
    component: RegisterFormComponent,
  },
  {
    path: 'edit/:id',
    component: RegisterFormComponent,
  },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
