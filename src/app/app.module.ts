import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { HeaderComponent } from './header/header.component';
import { OutputComponent } from './output/output.component';
import { OutputdecoratorComponent } from './outputdecorator/outputdecorator.component';



@NgModule({
  declarations: [
    AppComponent,
    ChildcomponentComponent,
    HeaderComponent,
    OutputComponent,
    OutputdecoratorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
