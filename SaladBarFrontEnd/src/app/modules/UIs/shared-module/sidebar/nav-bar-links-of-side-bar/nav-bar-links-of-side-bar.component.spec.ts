import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLinksOfSideBarComponent } from './nav-bar-links-of-side-bar.component';

describe('NavBarLinksOfSideBarComponent', () => {
  let component: NavBarLinksOfSideBarComponent;
  let fixture: ComponentFixture<NavBarLinksOfSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarLinksOfSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarLinksOfSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
