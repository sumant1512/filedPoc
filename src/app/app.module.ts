import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component";
import { BookDemoComponent } from "./index/book-demo/book-demo.component";
import { StartFormComponent } from "./index/start-form/start-form.component";
import { UserDetailsFormComponent } from "./index/user-details-form/user-details-form.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducers } from "./store/app.reducers";
import { AppEffects } from "./store/app.effects";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BookDemoComponent,
    StartFormComponent,
    UserDetailsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([...AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
