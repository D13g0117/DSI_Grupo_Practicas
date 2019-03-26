import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeacherProfilePage } from './teacher-profile.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeacherProfilePage]
})
export class TeacherProfilePageModule {}
