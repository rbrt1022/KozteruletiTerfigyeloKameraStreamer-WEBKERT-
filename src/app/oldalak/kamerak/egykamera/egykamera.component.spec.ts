import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgykameraComponent } from './egykamera.component';

describe('EgykameraComponent', () => {
  let component: EgykameraComponent;
  let fixture: ComponentFixture<EgykameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgykameraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgykameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
