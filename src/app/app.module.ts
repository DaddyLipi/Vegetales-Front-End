import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VegsComponent } from './vegs/vegs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VegDetailComponent } from './veg-detail/veg-detail.component';
import { VegSearchComponent } from './veg-search/veg-search.component';

@NgModule({
  declarations: [
    AppComponent,
    VegsComponent,
    VegDetailComponent,
    VegSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
