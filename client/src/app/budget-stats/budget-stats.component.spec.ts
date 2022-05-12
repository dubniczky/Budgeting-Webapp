import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetStatsComponent } from './budget-stats.component';

describe('BudgetStatsComponent', () => {
  let component: BudgetStatsComponent;
  let fixture: ComponentFixture<BudgetStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
