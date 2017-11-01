import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Services
// import { ApiService } from './shared/services/api.service';
import { AuthGuard } from './shared/services/auth-guard.service';

// Routes
import { routing, routedComponents } from './routes/routes';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './routes/login/login.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { ChatComponent } from './routes/chat/chat.component';
import { AdminComponent } from './routes/admin/admin.component';
import { StatsComponent } from './routes/stats/stats.component';
import { NavDashboardComponent } from './components/nav-dashboard/nav-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ChatComponent,
    AdminComponent,
    StatsComponent,
    NavDashboardComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [
    // ApiService,
    AuthGuard,
    { provide: LOCALE_ID, useValue: "nl-NL" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
