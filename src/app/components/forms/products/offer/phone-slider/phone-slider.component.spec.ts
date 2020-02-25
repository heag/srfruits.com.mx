import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSliderComponent } from './phone-slider.component';

describe('PhoneSliderComponent', () => {
  let component: PhoneSliderComponent;
  let fixture: ComponentFixture<PhoneSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
