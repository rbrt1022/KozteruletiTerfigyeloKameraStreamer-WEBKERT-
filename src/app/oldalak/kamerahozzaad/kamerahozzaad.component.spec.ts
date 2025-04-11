import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamerahozzaadComponent } from './kamerahozzaad.component';

describe('KamerahozzaadComponent', () => {
  let component: KamerahozzaadComponent;
  let fixture: ComponentFixture<KamerahozzaadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KamerahozzaadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamerahozzaadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
