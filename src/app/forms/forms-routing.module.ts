import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { TrainerModule } from './trainer/trainer.module';
import { StudentModule } from './student/student.module';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{
  path: '',
  component: FormsComponent,
  children: [
    {
      path: 'admin',
      component: AdminComponent,
    },
    {
      path: 'trainer',
      component: TrainerModule,
      loadChildren: () => import('./trainer/trainer.module').then(n => n.TrainerModule)
    },
    {
      path: 'student',
      component: StudentModule,
      loadChildren: () => import('./student/student.module').then(n => n.StudentModule)
    }
  ]
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)] ,
  exports: [RouterModule]
})



export class FormsRoutingModule { }
