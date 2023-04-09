import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularFooterComponent } from './regular-footer.component';

describe('RegularFooterComponent', () => {
  let component: RegularFooterComponent;
  let fixture: ComponentFixture<RegularFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
