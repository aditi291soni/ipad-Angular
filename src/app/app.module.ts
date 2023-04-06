import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { CardComponent } from './ipad/card/card.component';
import { IpadComponent } from './ipad/ipad.component';
import { IpaddetailComponent } from './newipad/ipaddetail/ipaddetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    SidenavComponent,
    CardComponent,
    IpadComponent,
    routingComponents,
    IpaddetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
