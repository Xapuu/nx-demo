import { async, TestBed } from '@angular/core/testing';
import { FeaturesCatMeetupModule } from './features-cat-meetup.module';

describe('FeaturesCatMeetupModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturesCatMeetupModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeaturesCatMeetupModule).toBeDefined();
  });
});
