import { async, TestBed } from '@angular/core/testing';
import { FeaturesRegistrationModule } from './features-registration.module';

describe('FeaturesRegistrationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturesRegistrationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeaturesRegistrationModule).toBeDefined();
  });
});
