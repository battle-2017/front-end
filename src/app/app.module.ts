import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Services
// import { ApiService } from './shared/services/api.service';

// Routes
import { routing, routedComponents } from './routes/routes';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './routes/login/login.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [
    // ApiService,
    { provide: LOCALE_ID, useValue: "nl-NL" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
