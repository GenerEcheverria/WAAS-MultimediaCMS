import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullColumnComponent } from './full-column.component';

describe('FullColumnComponent', () => {
  let component: FullColumnComponent;
  let fixture: ComponentFixture<FullColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
