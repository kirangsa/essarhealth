import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUsBannerComponent } from './join-us-banner.component';

describe('JoinUsBannerComponent', () => {
  let component: JoinUsBannerComponent;
  let fixture: ComponentFixture<JoinUsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinUsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinUsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
