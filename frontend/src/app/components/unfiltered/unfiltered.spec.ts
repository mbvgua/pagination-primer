import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unfiltered } from './unfiltered';

describe('Unfiltered', () => {
  let component: Unfiltered;
  let fixture: ComponentFixture<Unfiltered>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Unfiltered]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Unfiltered);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
