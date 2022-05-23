import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full',    canActivate: [AuthGuard]
},
  { path: 'new-list', component: NewListComponent  ,  canActivate: [AuthGuard]
  },
  { path: 'edit-list/:listId', component: EditListComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'lists', component: TaskViewComponent , canActivate: [AuthGuard] },
  { path: 'lists/:listId', component: TaskViewComponent },
  { path: 'lists/:listId/new-task', component: NewTaskComponent },
  { path: 'lists/:listId/edit-task/:taskId', component: EditTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
