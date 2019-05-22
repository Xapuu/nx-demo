import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturesCartModule } from '@meetup/features/cart'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeaturesCartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
