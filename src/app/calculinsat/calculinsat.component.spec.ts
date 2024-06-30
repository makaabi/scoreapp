import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculinsatComponent } from './calculinsat.component';

describe('CalculinsatComponent', () => {
  let component: CalculinsatComponent;
  let fixture: ComponentFixture<CalculinsatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculinsatComponent]
    });
    fixture = TestBed.createComponent(CalculinsatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
