import { async, TestBed } from '@angular/core/testing';
import { UiCatComponentsModule } from './ui-cat-components.module';

describe('UiCatComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiCatComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiCatComponentsModule).toBeDefined();
  });
});
