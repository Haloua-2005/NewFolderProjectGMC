import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './Directives/ng-style/ng-style.component';
import { HighlightDirectiveDirective } from './Directives/highlight-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    HighlightDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
