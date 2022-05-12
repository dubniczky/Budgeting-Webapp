import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetStatComponent } from './budget-stat.component';

describe('BudgetStatComponent', () => {
  let component: BudgetStatComponent;
  let fixture: ComponentFixture<BudgetStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
