import { async, TestBed } from '@angular/core/testing';
import { FeaturesDogAdoptionModule } from './features-dog-adoption.module';

describe('FeaturesDogAdoptionModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturesDogAdoptionModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeaturesDogAdoptionModule).toBeDefined();
  });
});
