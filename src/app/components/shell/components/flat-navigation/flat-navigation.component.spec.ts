import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatNavigationComponent } from './flat-navigation.component';

describe('FlatNavigationComponent', () => {
  let component: FlatNavigationComponent;
  let fixture: ComponentFixture<FlatNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
