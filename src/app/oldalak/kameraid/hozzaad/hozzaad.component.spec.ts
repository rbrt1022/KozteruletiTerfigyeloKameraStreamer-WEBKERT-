import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HozzaadComponent } from './hozzaad.component';

describe('HozzaadComponent', () => {
  let component: HozzaadComponent;
  let fixture: ComponentFixture<HozzaadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HozzaadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HozzaadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
