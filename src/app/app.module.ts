import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Route, RouterModule, } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnimationeffectComponent } from './animationeffect/animationeffect.component';
import { RefactorComponent } from './refactor/refactor.component';
const appRoutes: Route[] = [
  {
    path: "welcome",
    component: WelcomeComponent
  },
  {
    path: "animation",
    component: AnimationeffectComponent
  },
  {
    path: "refactor",
    component: RefactorComponent,
    data: {
      type: 1,
      machineName: "Car"
    }
  }

];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AnimationeffectComponent,
    RefactorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
