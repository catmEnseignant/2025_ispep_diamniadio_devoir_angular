import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/composants/navbar/navbar.component';
import { FooterComponent } from './shared/composants/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
