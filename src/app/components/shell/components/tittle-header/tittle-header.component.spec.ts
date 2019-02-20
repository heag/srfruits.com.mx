import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TittleHeaderComponent } from './tittle-header.component';

describe('TittleHeaderComponent', () => {
  let component: TittleHeaderComponent;
  let fixture: ComponentFixture<TittleHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TittleHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TittleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
