import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'teacher-profile', loadChildren: './teacher-profile/teacher-profile.module#TeacherProfilePageModule' },
  { path: 'student-profile', loadChildren: './student-profile/student-profile.module#StudentProfilePageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
