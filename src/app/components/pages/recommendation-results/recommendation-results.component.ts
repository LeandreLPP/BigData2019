import { Component, OnInit, Input } from '@angular/core';
import { Recommendations } from '../../../model/recommendations';

@Component({
  selector: 'app-recommendation-results',
  templateUrl: './recommendation-results.component.html',
  styleUrls: ['./recommendation-results.component.scss']
})
export class RecommendationResultsComponent implements OnInit {
  @Input()
  results: Recommendations;

  constructor() { }

  ngOnInit() {
  }

}
