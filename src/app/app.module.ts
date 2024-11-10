import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './website/shared/pages/main/main.component';
import { HeaderComponent } from './website/shared/layout/header/header.component';
import { AboutModule } from './website/modules/about/about.module';
import { FooterComponent } from './website/shared/layout/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }