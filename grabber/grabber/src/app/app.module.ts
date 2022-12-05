import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WaterfallComponent } from './waterfall/waterfall.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WaterfallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
