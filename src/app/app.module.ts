import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import Core and Shared Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// Import Feature Modules
import { LandingPageModule } from './modules/landing-page/landing-page.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    CoreModule,        
    SharedModule,      
    LandingPageModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
