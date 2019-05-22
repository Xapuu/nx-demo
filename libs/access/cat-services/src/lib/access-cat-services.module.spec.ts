import { async, TestBed } from '@angular/core/testing';
import { AccessCatServicesModule } from './access-cat-services.module';

describe('AccessCatServicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccessCatServicesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccessCatServicesModule).toBeDefined();
  });
});
