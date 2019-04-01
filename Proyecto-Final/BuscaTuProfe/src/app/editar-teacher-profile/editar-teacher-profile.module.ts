import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditarTeacherProfilePage } from './editar-teacher-profile.page';

const routes: Routes = [
  {
    path: '',
    component: EditarTeacherProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditarTeacherProfilePage]
})
export class EditarTeacherProfilePageModule {}
