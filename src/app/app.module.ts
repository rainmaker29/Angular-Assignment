import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WorkComponent } from './work/work.component';
import { ComputationComponent } from './computation/computation.component';
import { EvencolorDirective } from './evencolor.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,WorkComponent, ComputationComponent, EvencolorDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
