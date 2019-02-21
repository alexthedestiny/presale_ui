import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingsPageComponent } from './offerings-page.component';

describe('OfferingsPageComponent', () => {
  let component: OfferingsPageComponent;
  let fixture: ComponentFixture<OfferingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
