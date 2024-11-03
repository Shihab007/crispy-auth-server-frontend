import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) // Lazy load Dashboard module as the default route
//   },
//   {
//     path: 'auth',
//     loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) // Lazy load Auth module
//   },
//   {
//     path: 'profile',
//     loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) // Lazy load Profile module
//   },
//   {
//     path: '**',
//     redirectTo: '' // Redirect any unknown paths to the default route
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
