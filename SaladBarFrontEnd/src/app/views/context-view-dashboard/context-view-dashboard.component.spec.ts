import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextViewDashboardComponent } from './context-view-dashboard.component';

describe('ContextViewDashboardComponent', () => {
  let component: ContextViewDashboardComponent;
  let fixture: ComponentFixture<ContextViewDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextViewDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextViewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
