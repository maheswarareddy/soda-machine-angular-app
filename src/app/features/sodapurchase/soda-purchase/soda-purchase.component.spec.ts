import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SodaPurchaseComponent } from './soda-purchase.component';

describe('PersonPageComponent', () => {
  let component: SodaPurchaseComponent;
  let fixture: ComponentFixture<SodaPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SodaPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SodaPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
