import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material/material.module';
import { OfferingsPageComponent } from './components/offerings-page/offerings-page.component';
import { FeaturedCardComponent } from './components/cards/featured-card/featured-card.component';
import { CommonCardComponent } from './components/cards/common-card/common-card.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'offerings', pathMatch: 'full'},
  {path: 'offerings', component: OfferingsPageComponent},
  {path: '**', redirectTo: 'offerings', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuBarComponent,
    OfferingsPageComponent,
    FeaturedCardComponent,
    CommonCardComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FontAwesomeModule, 
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
