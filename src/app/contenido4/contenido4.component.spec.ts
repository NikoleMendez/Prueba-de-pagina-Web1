import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenido4Component } from './contenido4.component';

describe('Contenido4Component', () => {
  let component: Contenido4Component;
  let fixture: ComponentFixture<Contenido4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contenido4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contenido4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
