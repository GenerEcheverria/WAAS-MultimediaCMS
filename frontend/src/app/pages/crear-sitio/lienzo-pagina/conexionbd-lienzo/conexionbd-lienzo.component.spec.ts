import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionbdLienzoComponent } from './conexionbd-lienzo.component';

describe('ConexionbdLienzoComponent', () => {
  let component: ConexionbdLienzoComponent;
  let fixture: ComponentFixture<ConexionbdLienzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexionbdLienzoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConexionbdLienzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
