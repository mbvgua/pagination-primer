import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitOffset } from './limit-offset';

describe('LimitOffset', () => {
  let component: LimitOffset;
  let fixture: ComponentFixture<LimitOffset>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimitOffset]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitOffset);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
