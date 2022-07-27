import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { WidgetComponent } from '../shared/components/widget/widget.component';
import { WidgetSliderComponent } from './components/widget-slider/widget-slider.component';

@NgModule({
  declarations: [
    SliderComponent,
    WidgetComponent,
    WidgetSliderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SliderComponent,
    WidgetComponent,
    WidgetSliderComponent
  ]
})
export class SharedModule { }
