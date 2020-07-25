import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './Directives/ng-style/ng-style.component';
import { HighlightDirectiveDirective } from './Directives/highlight-directive.directive';
import { NgIfComponent } from './ng-if/ng-if.component';
import { AttributesComponent } from './attributes/attributes.component';
import { DefaultImagePipe } from './default-image.pipe';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    HighlightDirectiveDirective,
    NgIfComponent,
    AttributesComponent,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
