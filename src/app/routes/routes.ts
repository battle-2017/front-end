import { Routes, RouterModule} from '@angular/router';

// import { AuthService } from 'app/shared/services/auth.service';
import { AuthGuard } from 'app/shared/services/auth-guard.service';

// Routed components
import { LoginComponent }         from 'app/routes/login/login.component';
import { DashboardComponent }     from 'app/routes/dashboard/dashboard.component';
import { ChatRouteComponent }     from 'app/routes/chat-route/chat-route.component';
import { StatsRouteComponent }    from 'app/routes/stats-route/stats-route.component';
import { AdminRouteComponent }    from 'app/routes/admin-route/admin-route.component';
import { PageNotFoundComponent }  from 'app/routes/page-not-found/page-not-found.component';
// import { LogoutComponent } from 'app/routes/logout/logout.component';

const appRoutes: Routes = [
  { 
    path: 'login',
    component: LoginComponent
  },
  // { 
  //   path: 'logout',
  //   component: AppComponent
  // },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin',
        component: AdminRouteComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'chat',
        component: ChatRouteComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'stats',
        component: StatsRouteComponent,
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [
    LoginComponent,
    // LogoutComponent,
    PageNotFoundComponent
]