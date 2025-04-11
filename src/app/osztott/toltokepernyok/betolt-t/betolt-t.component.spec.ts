import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetoltTComponent } from './betolt-t.component';

describe('BetoltTComponent', () => {
  let component: BetoltTComponent;
  let fixture: ComponentFixture<BetoltTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetoltTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetoltTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
