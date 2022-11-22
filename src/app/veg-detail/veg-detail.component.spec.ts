import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegDetailComponent } from './veg-detail.component';

describe('VegDetailComponent', () => {
  let component: VegDetailComponent;
  let fixture: ComponentFixture<VegDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
