import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthenticationService } from './authentication.service';
import { DataService } from './data.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WinAuthInterceptor } from './win-auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WinAuthInterceptor,
      multi: true
    },
    AuthenticationService,
    DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
