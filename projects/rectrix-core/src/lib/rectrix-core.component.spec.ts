import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectrixCoreComponent } from './rectrix-core.component';

describe('RectrixCoreComponent', () => {
  let component: RectrixCoreComponent;
  let fixture: ComponentFixture<RectrixCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectrixCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectrixCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
