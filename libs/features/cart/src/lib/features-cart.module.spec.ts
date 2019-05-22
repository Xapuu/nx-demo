import { async, TestBed } from '@angular/core/testing';
import { FeaturesCartModule } from './features-cart.module';

describe('FeaturesCartModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturesCartModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeaturesCartModule).toBeDefined();
  });
});
