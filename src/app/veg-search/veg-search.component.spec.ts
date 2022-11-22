import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegSearchComponent } from './veg-search.component';

describe('VegSearchComponent', () => {
  let component: VegSearchComponent;
  let fixture: ComponentFixture<VegSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
