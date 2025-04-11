import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KezdooldalComponent } from './kezdooldal.component';

describe('KezdooldalComponent', () => {
  let component: KezdooldalComponent;
  let fixture: ComponentFixture<KezdooldalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KezdooldalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KezdooldalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
