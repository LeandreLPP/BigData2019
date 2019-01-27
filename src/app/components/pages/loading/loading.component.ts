import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';
import { Recommendations } from 'src/app/model/recommendations';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  results: Recommendations;
  loading: boolean;
  constructor(private api: ApiService, private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.api.getRecommendations(this.profileService.chosenProfile).subscribe(
      results => { this.results = results; this.loading = false; },
      _ => this.router.navigate(['/recommendations'])
    );
  }
}
