import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

// Components are declared here
@NgModule({
  // declares app component so that angular can locate the selector
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  // these are generally external modules, or our own modules that we make
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // often used to stop 404 not found from happening, and redirects to home
    ]),
    ProductModule // established routes and configuring them, order matters. more specific routers should be before less specific ones.
  ],
  // this is the startup component that will be started first, and in index.html has the root selector tag
  bootstrap: [AppComponent]
})
export class AppModule { }
