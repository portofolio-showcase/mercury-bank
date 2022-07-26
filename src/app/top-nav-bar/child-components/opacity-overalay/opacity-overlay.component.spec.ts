import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpacityOverlayComponent } from './opacity-overaly.component';

describe('OpacityOverlayComponent', () => {
  let component: OpacityOverlayComponent;
  let fixture: ComponentFixture<OpacityOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpacityOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpacityOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
