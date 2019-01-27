import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RecommendationComponent } from './components/pages/recommendation/recommendation.component';
import { ProfileChoiceComponent } from './components/pages/profile-choice/profile-choice.component';
import { RecommendationResultsComponent } from './components/pages/recommendation-results/recommendation-results.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { BookDisplayComponent } from './components/book-display/book-display.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/pages/loading/loading.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    BookDisplayComponent,
    NavigationBarComponent,
    RecommendationComponent,
    ProfileChoiceComponent,
    RecommendationResultsComponent,
    DetailsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
