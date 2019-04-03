import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard"
import { NologinGuard } from "./guards/nologin.guard"

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [NologinGuard]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' , canActivate: [ AuthGuard]},
  { path: 'teacher-profile', loadChildren: './teacher-profile/teacher-profile.module#TeacherProfilePageModule' , canActivate: [ AuthGuard]},
  { path: 'teacher-profile/:id', loadChildren: './teacher-profile/teacher-profile.module#TeacherProfilePageModule' , canActivate: [ AuthGuard]},
  { path: 'student-profile', loadChildren: './student-profile/student-profile.module#StudentProfilePageModule' , canActivate: [ AuthGuard]},
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' , canActivate: [ AuthGuard]},
  { path: 'registrar', loadChildren: './registrar/registrar.module#RegistrarPageModule' },
  { path: 'editar-teacher-profile', loadChildren: './editar-teacher-profile/editar-teacher-profile.module#EditarTeacherProfilePageModule' , canActivate: [ AuthGuard]},
  { path: 'editar-teacher-profile/:id', loadChildren: './editar-teacher-profile/editar-teacher-profile.module#EditarTeacherProfilePageModule' , canActivate: [ AuthGuard]},  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
