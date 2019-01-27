import { Injectable } from '@angular/core';
import { UserProfile } from '../model/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profiles: UserProfile[] = [
    {
      name: 'Average reader',
      id: 'profile1',
      reviews: [
        { asin: '0061965804', overall: 5 },
        { asin: '0061493341', overall: 5 },
        { asin: '0061939897', overall: 5 },
        { asin: '0091933684', overall: 4 },
        { asin: '0060746378', overall: 4 },
        { asin: '0099710013', overall: 4 },
        { asin: '0062193643', overall: 4 },
        { asin: '0007386648', overall: 3 },
        { asin: '0060763280', overall: 3 },
        { asin: '0007136838', overall: 1 }
      ]
    },
    {
      name: 'Fantasy fan',
      id: 'profile2',
      reviews: [
        { asin: '059035342X', overall: 5 },
        { asin: '0439064872', overall: 5 },
        { asin: '0439136369', overall: 5 },
        { asin: '0439139600', overall: 5 },
        { asin: '0439358078', overall: 5 },
        { asin: '0439785960', overall: 5 },
        { asin: '0545139708', overall: 5 },
        { asin: '0547928211', overall: 5 },
        { asin: '0547928203', overall: 5 },
        { asin: 'B002RIA062', overall: 5 }
      ]
    },
    {
      name: 'American teenager',
      id: 'profile3',
      reviews: [
        { asin: '0062024027', overall: 5 },
        { asin: '0007442920', overall: 5 },
        { asin: '006172680X', overall: 4 },
        { asin: '014242417X', overall: 5 },
        { asin: '0062238868', overall: 2 },
        { asin: '0060098902', overall: 3 },
        { asin: '0025853503', overall: 3 },
        { asin: '0002247399', overall: 5 },
        { asin: '0007124015', overall: 4 },
        { asin: '1524763136', overall: 5 }
      ]
    }
  ];
  private _chosenProfile: UserProfile;

  constructor() { }

  getProfiles(): UserProfile[] {
    return this.profiles;
  }

  addProfile(profile: UserProfile) {
    this.profiles.push(profile);
  }

  removeProfile(profile: UserProfile) {
    this.profiles.filter(p => p !== profile);
  }

  set chosenProfile(profile: UserProfile) {
    this._chosenProfile = profile;
  }

  get chosenProfile(): UserProfile {
    return this._chosenProfile;
  }
}
