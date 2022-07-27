import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSliderComponent } from './widget-slider.component';

describe('WidgetSliderComponent', () => {
  let component: WidgetSliderComponent;
  let fixture: ComponentFixture<WidgetSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
