import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesProcedureComponent } from './rules-procedure.component';

describe('RulesProcedureComponent', () => {
  let component: RulesProcedureComponent;
  let fixture: ComponentFixture<RulesProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesProcedureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
