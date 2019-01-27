import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendationComponent } from './components/pages/recommendation/recommendation.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { ProfileChoiceComponent } from './components/pages/profile-choice/profile-choice.component';
import { LoadingComponent } from './components/pages/loading/loading.component';
import { RecommendationResultsComponent } from './components/pages/recommendation-results/recommendation-results.component';

const routes: Routes = [
  { path: '', component: DetailsComponent },
  { path: 'recommendations', component: RecommendationComponent, children: [
    { path: '', component: ProfileChoiceComponent },
    { path: 'loading', component: LoadingComponent },
    { path: 'results', component: RecommendationResultsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
