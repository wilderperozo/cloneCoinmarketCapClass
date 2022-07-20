import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { WidgetComponent } from '../shared/components/widget/widget.component';


@NgModule({
  declarations: [
    SliderComponent,
    WidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SliderComponent,
    WidgetComponent
  ]
})
export class SharedModule { }
