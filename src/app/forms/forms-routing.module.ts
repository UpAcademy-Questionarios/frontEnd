import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { AdminModule } from './admin/admin.module';
import { TrainerModule } from './trainer/trainer.module';
import { StudentModule } from './student/student.module';

const routes: Routes = [ {
  path: '',
  component: FormsComponent,
  children: [
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then (n => n.AdminModule)
    },
    {
      path: 'trainer',
      component: TrainerModule,
      loadChildren: () => import('./trainer/trainer.module').then (n => n.TrainerModule)
    },
    {
      path: 'student',
      component: StudentModule,
      loadChildren: () => import('./student/student.module').then (n => n.StudentModule)
    }
  ]
},


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
