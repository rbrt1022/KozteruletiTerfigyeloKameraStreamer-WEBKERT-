import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldalmenuComponent } from './oldalmenu.component';

describe('OldalmenuComponent', () => {
  let component: OldalmenuComponent;
  let fixture: ComponentFixture<OldalmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldalmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldalmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
