import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Services
import { ApiService } from './shared/services/api.service';
import { AuthGuard } from './shared/services/auth-guard.service';

// Routes
import { routing, routedComponents } from './routes/routes';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './routes/login/login.component';
import { ChatComponent } from './components/chat/chat/chat.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { NavDashboardComponent } from './components/nav-dashboard/nav-dashboard.component';
import { ActiveChatsComponent } from './components/chat/active-chats/active-chats.component';
import { ChatRouteComponent } from './routes/chat-route/chat-route.component';
import { AdminRouteComponent } from './routes/admin-route/admin-route.component';
import { StatsRouteComponent } from './routes/stats-route/stats-route.component';
import { TimelineComponent } from './components/chat/timeline/timeline.component';
import { SpeechBubbleComponent } from './components/chat/speech-bubble/speech-bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    PageNotFoundComponent,
    DashboardComponent,
    NavDashboardComponent,
    ActiveChatsComponent,
    ChatRouteComponent,
    AdminRouteComponent,
    StatsRouteComponent,
    TimelineComponent,
    SpeechBubbleComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [
    ApiService,
    AuthGuard,
    { provide: LOCALE_ID, useValue: "nl-NL" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
