import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpErrorHandler }     from './http-error-handler.service';
import { MessageService }       from './message.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent 
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule 
  ],
  providers: [HttpErrorHandler,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }