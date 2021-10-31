import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedStaffBannerComponent } from './need-staff-banner.component';

describe('NeedStaffBannerComponent', () => {
  let component: NeedStaffBannerComponent;
  let fixture: ComponentFixture<NeedStaffBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedStaffBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedStaffBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
