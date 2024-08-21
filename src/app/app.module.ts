import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select'; // Import the module here

import { AppComponent } from './app.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgSelectModule,
    AppComponent,
    // Import NgSelectModule instead of NgSelectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
