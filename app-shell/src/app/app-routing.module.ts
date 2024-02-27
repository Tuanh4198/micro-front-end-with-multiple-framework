import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth.guard';
import { ReactPageComponent } from 'src/app/reactPage/react-page.component';
import { VuePageComponent } from 'src/app/vuePage/vue-page.component';
import { AngularPageComponent } from 'src/app/angularPage/angular-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'react',
    component: ReactPageComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'vue',
    component: VuePageComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'angular',
    component: AngularPageComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
