import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule, Type} from '@angular/core';

import {AppComponent} from './app.component';
import {ThingBlueComponent} from './components/thing-blue/thing-blue.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ThingBlueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [ThingBlueComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    this.setCustomElementTag('blue-element', ThingBlueComponent);
  }

  private setCustomElementTag<T>(tag: string, type: Type<T>) {
    const elm = createCustomElement(type, {injector: this.injector});
    customElements.define(tag, elm);
  }

}
