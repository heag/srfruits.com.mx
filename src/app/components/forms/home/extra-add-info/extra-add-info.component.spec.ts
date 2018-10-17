import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraAddInfoComponent } from './extra-add-info.component';

describe('ExtraAddInfoComponent', () => {
  let component: ExtraAddInfoComponent;
  let fixture: ComponentFixture<ExtraAddInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraAddInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraAddInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
