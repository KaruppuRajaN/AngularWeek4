import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetransactionComponent } from './deletetransaction.component';

describe('DeletetransactionComponent', () => {
  let component: DeletetransactionComponent;
  let fixture: ComponentFixture<DeletetransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletetransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletetransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
