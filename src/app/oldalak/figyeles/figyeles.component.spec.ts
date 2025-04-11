import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigyelesComponent } from './figyeles.component';

describe('FigyelesComponent', () => {
  let component: FigyelesComponent;
  let fixture: ComponentFixture<FigyelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigyelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigyelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
