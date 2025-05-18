import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KezelesComponent } from './kezeles.component';

describe('KezelesComponent', () => {
  let component: KezelesComponent;
  let fixture: ComponentFixture<KezelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KezelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KezelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
