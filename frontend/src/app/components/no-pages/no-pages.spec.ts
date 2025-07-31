import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPages } from './no-pages';

describe('NoPages', () => {
  let component: NoPages;
  let fixture: ComponentFixture<NoPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
