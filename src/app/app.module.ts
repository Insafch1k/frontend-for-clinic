import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './website/shared/pages/main/main.component';
import { HeaderComponent } from './website/shared/layout/header/header.component';
import { AboutModule } from './website/modules/about/about.module';
import { FooterComponent } from './website/shared/layout/footer/footer.component';
import { AnalyzesModule } from './website/modules/analyzes/analyzes.module';
import { SpecialistsModule } from './website/modules/specialists/specialists.module';






@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    AnalyzesModule,
    SpecialistsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
