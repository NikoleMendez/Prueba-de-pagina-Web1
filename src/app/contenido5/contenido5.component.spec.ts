import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenido5Component } from './contenido5.component';

describe('Contenido5Component', () => {
  let component: Contenido5Component;
  let fixture: ComponentFixture<Contenido5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contenido5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contenido5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
