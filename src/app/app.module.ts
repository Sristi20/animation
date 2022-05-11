import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { Directive1Directive } from './directive1.directive';
import { Directive2Directive } from './directive2.directive';
import { HighlightDirective } from './highlight.directive';
import { SearchComponent } from './search/search.component';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    Directive1Directive,
    Directive2Directive,
    HighlightDirective,
    SearchComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
