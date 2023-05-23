import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { actionReducerMap } from './auth/store';



@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
   
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forRoot(actionReducerMap, {}),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
