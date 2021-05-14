import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component";
import { BookDemoComponent } from "./index/book-demo/book-demo.component";
import { StartFormComponent } from "./index/book-demo/start-form/start-form.component";
import { UserDetailsFormComponent } from "./index/book-demo/user-details-form/user-details-form.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducers } from "./store/app.reducers";
import { AppEffects } from "./store/app.effects";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OffersComponent } from './index/offers/offers.component';
import { BenefitsComponent } from './index/benefits/benefits.component';
import { ClientReviewComponent } from './index/client-review/client-review.component';
import { ClientCardComponent } from "./index/client-review/client-card/client-card.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BookDemoComponent,
    StartFormComponent,
    UserDetailsFormComponent,
    OffersComponent,
    BenefitsComponent,
    ClientReviewComponent,
    ClientCardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
