import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsDetailComponent } from './questions-detail/questions-detail.component';
import { HomeComponent } from './home/home.component';
import { ReplysComponent } from './replys/replys.component';
import { ReplysdetailComponent } from './replysdetail/replysdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsDetailComponent,
    HomeComponent,
    ReplysComponent,
    ReplysdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
