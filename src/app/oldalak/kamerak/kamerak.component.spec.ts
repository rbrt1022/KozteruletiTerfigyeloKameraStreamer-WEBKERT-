import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamerakComponent } from './kamerak.component';

describe('KamerakComponent', () => {
  let component: KamerakComponent;
  let fixture: ComponentFixture<KamerakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KamerakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamerakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
