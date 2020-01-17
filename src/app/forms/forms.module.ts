import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    FormsComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
  ]
})
export class FormsModule { }
