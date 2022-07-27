import { Component, Input, OnInit } from '@angular/core';
import { WidgetCardSliderI } from '../../interfaces/widget';

@Component({
  selector: 'app-widget-slider',
  templateUrl: './widget-slider.component.html',
  styleUrls: ['./widget-slider.component.scss']
})
export class WidgetSliderComponent implements OnInit {
  @Input() dataWidgetSlider?: WidgetCardSliderI[];
  items = [
    {
      title: "1 slide label",
      summery: "1 slide label summery",
      url: "https://via.placeholder.com/200?text=first"
    },
    {
      title: "2 slide label",
      summery: "2 slide label summery",
      url: "https://via.placeholder.com/200?text=second"
    },
    {
      title: "3 slide label",
      summery: "3 slide label summery",
      url: "https://via.placeholder.com/200?text=third"
    }
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

  redirectTo(url:string){
    window.open(url)
  }

}
