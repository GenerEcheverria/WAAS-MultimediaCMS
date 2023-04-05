import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionSitioComponent } from './edicion-sitio.component';

describe('EdicionSitioComponent', () => {
  let component: EdicionSitioComponent;
  let fixture: ComponentFixture<EdicionSitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionSitioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
