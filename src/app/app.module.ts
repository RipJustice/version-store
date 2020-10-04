import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VersionCompareComponent } from './components/version-compare/version-compare.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionCompareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
