import { async, TestBed } from '@angular/core/testing';
import { UiDogComponentsModule } from './ui-dog-components.module';

describe('UiDogComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiDogComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiDogComponentsModule).toBeDefined();
  });
});
