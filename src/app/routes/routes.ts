import { Routes, RouterModule} from '@angular/router';

// import { AuthService } from 'app/shared/services/auth.service';
import { AuthGuard } from 'app/shared/services/auth-guard.service';

// import { LoginComponent } from 'app/routes/login/login.component';
// import { LogoutComponent } from 'app/routes/logout/logout.component';

import { AppComponent } from 'app/app.component';

const appRoutes: Routes = [
  { 
    path: 'login',
    component: AppComponent
  },
  { 
    path: 'logout',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [
    // LoginComponent,
    // LogoutComponent,
    // PageNotFoundComponent
]