import { Component, Input, OnInit } from '@angular/core';
import { WidgetCardSliderI } from '../../interfaces/widget';

@Component({
  selector: 'app-widget-slider',
  templateUrl: './widget-slider.component.html',
  styleUrls: ['./widget-slider.component.scss']
})
export class WidgetSliderComponent implements OnInit {
  @Input() dataWidgetSlider?: WidgetCardSliderI[];
  iconVerified:string='https://s2.coinmarketcap.com/static/cloud/img/icon/certified.svg?_=e293f78'
  constructor() { }

  ngOnInit(): void {
    
  }

  redirectTo(url:string){
    window.open(url)
  }

}
