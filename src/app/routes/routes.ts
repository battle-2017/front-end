import { Routes, RouterModule} from '@angular/router';

// import { AuthService } from 'app/shared/services/auth.service';
import { AuthGuard } from 'app/shared/services/auth-guard.service';

// Routed components
import { LoginComponent }         from 'app/routes/login/login.component';
import { DashboardComponent }     from 'app/routes/dashboard/dashboard.component';
import { ChatComponent }          from 'app/routes/chat/chat.component';
import { StatsComponent }         from 'app/routes/stats/stats.component';
import { AdminComponent }         from 'app/routes/admin/admin.component';
import { PageNotFoundComponent }  from 'app/routes/page-not-found/page-not-found.component';
// import { LogoutComponent } from 'app/routes/logout/logout.component';

import { AppComponent } from 'app/app.component';

const appRoutes: Routes = [
  { 
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'logout',
    component: AppComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'chat',
        component: ChatComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'stats',
        component: StatsComponent,
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