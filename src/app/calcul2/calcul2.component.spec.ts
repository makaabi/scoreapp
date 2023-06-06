import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calcul2Component } from './calcul2.component';

describe('Calcul2Component', () => {
  let component: Calcul2Component;
  let fixture: ComponentFixture<Calcul2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Calcul2Component]
    });
    fixture = TestBed.createComponent(Calcul2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
