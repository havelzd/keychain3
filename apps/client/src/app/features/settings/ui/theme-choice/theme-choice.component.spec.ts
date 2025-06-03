import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeChoiceComponent } from './theme-choice.component';

describe('ThemeChoiceComponent', () => {
  let component: ThemeChoiceComponent;
  let fixture: ComponentFixture<ThemeChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeChoiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
