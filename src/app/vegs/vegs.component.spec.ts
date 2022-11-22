import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegsComponent } from './vegs.component';

describe('VegsComponent', () => {
  let component: VegsComponent;
  let fixture: ComponentFixture<VegsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
