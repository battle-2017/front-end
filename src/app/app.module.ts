import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Services
// import { ApiService } from './shared/services/api.service';

// Routes
// import { routing, routedComponents } from './routes/routes';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // routing,
  ],
  providers: [
    // ApiService,
    { provide: LOCALE_ID, useValue: "nl-NL" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
