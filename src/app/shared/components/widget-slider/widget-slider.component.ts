import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WidgetSliderI } from '../../interfaces/widget';

@Component({
  selector: 'app-widget-slider',
  templateUrl: './widget-slider.component.html',
  styleUrls: ['./widget-slider.component.scss']
})
export class WidgetSliderComponent implements OnInit {
  @Input() dataWidgetSlider?: WidgetSliderI;
  constructor() { }

  ngOnInit(): void {
    
  }

  get totalSlider(){
     return Array(this.dataWidgetSlider?.totalSliders)
  }

  redirectTo(url:string){
    window.open(url)
  }

}
