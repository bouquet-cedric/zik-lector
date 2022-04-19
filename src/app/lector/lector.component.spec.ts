import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorComponent } from './lector.component';

describe('LectorComponent', () => {
  let component: LectorComponent;
  let fixture: ComponentFixture<LectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
