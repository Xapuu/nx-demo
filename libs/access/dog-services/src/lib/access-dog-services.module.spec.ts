import { async, TestBed } from '@angular/core/testing';
import { AccessDogServicesModule } from './access-dog-services.module';

describe('AccessDogServicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccessDogServicesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccessDogServicesModule).toBeDefined();
  });
});
