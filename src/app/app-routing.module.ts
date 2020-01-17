import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './forms/admin/admin.module';
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [ {
  path: '',
  loadChildren: () => import('./forms/forms.module').then (n => n.FormsModule),
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
