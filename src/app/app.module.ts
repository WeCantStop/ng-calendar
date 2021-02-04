import { NgModule } from '@angular/core';
import { BaseModule } from '@shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
