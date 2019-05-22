import { async, TestBed } from '@angular/core/testing';
import { AccessCommonServicesModule } from './access-common-services.module';

describe('AccessCommonServicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccessCommonServicesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccessCommonServicesModule).toBeDefined();
  });
});
