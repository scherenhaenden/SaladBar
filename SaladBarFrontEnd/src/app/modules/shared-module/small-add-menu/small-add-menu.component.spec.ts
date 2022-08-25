import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallAddMenuComponent } from './small-add-menu.component';

describe('SmallAddMenuComponent', () => {
  let component: SmallAddMenuComponent;
  let fixture: ComponentFixture<SmallAddMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallAddMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallAddMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
