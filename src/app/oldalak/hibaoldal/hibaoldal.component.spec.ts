import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HibaoldalComponent } from './hibaoldal.component';

describe('HibaoldalComponent', () => {
  let component: HibaoldalComponent;
  let fixture: ComponentFixture<HibaoldalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HibaoldalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HibaoldalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
