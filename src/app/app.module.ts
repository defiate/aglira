import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BorrowComponent } from './pages/borrow/borrow.component';
import { BorrowDetailComponent } from './pages/borrow-detail/borrow-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BorrowComponent,
    BorrowDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
