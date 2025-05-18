import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KameraidComponent } from './kameraid.component';

describe('KameraidComponent', () => {
  let component: KameraidComponent;
  let fixture: ComponentFixture<KameraidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KameraidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KameraidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
