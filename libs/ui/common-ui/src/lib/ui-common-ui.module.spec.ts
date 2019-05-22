import { async, TestBed } from '@angular/core/testing';
import { UiCommonUiModule } from './ui-common-ui.module';

describe('UiCommonUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiCommonUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiCommonUiModule).toBeDefined();
  });
});
