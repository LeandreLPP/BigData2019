import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserProfile } from '../../../model/user-profile';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserReview } from '../../../model/user-review';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-choice',
  templateUrl: './profile-choice.component.html',
  styleUrls: ['./profile-choice.component.scss']
})
export class ProfileChoiceComponent implements OnInit {

  savedProfiles: UserProfile[];

  get profile(): UserProfile {
    return this.profileService.chosenProfile;
  }

  set profile(up: UserProfile) {
    this.profileService.chosenProfile = up;
  }

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private profileService: ProfileService) { }

  ngOnInit() {
    this.initForm();
    this.savedProfiles = this.profileService.getProfiles();
  }

  initForm() {
    this.form = this.fb.group({
      review: this.fb.group({
        asin: this.fb.control('', Validators.required),
        overall: this.fb.control(3, [Validators.required, Validators.min(0), Validators.max(5)])
      }, { disabled: true}),
      profile: this.fb.control(null)
    });
    this.form.get('profile').valueChanges.subscribe(
      profileSelected => this.profile = profileSelected
    );
  }

  loadProfile() {
    this.profile = this.form.get('profile').value;
  }

  addReview() {
    this.profile.id = 'custom';
    this.profile.reviews.push(this.form.get('review').value);
    this.initForm();
  }

  removeReview(review: UserReview) {
    this.profile.id = 'custom';
    this.profile.reviews = this.profile.reviews.filter(r => r.asin !== review.asin);
  }
}
