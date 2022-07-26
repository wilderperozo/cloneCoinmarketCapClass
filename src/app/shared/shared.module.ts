import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { WidgetComponent } from '../shared/components/widget/widget.component';
import { WidgetSliderComponent } from './components/widget-slider/widget-slider.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    SliderComponent,
    WidgetComponent,
    WidgetSliderComponent,
  ],
  imports: [
    CommonModule,
    IvyCarouselModule
  ],
  exports:[
    SliderComponent,
    WidgetComponent,
    WidgetSliderComponent,
    IvyCarouselModule
  ]
})
export class SharedModule { }
