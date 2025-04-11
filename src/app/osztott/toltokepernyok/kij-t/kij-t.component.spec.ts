import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KijTComponent } from './kij-t.component';

describe('KijTComponent', () => {
  let component: KijTComponent;
  let fixture: ComponentFixture<KijTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KijTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KijTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
