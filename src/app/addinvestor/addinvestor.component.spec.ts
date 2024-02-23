import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinvestorComponent } from './addinvestor.component';

describe('AddinvestorComponent', () => {
  let component: AddinvestorComponent;
  let fixture: ComponentFixture<AddinvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddinvestorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddinvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
