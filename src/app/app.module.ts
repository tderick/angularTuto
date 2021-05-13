import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { HeaderComponent } from './header/header.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { HeaderLeftComponent } from './header/header-left/header-left.component';
import { HeaderRightComponent } from './header/header-right/header-right.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    HeaderComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
    HeaderLeftComponent,
    HeaderRightComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
