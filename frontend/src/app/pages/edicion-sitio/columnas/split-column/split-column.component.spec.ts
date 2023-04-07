import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitColumnComponent } from './split-column.component';

describe('SplitColumnComponent', () => {
  let component: SplitColumnComponent;
  let fixture: ComponentFixture<SplitColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
