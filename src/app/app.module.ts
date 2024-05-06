import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [AppComponent, GraphComponent],
  imports: [BrowserModule, AppRoutingModule, NgxGraphModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
