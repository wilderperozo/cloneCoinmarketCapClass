import { Component, OnInit } from '@angular/core';
import { WidgetI, WidgetCardSliderI } from 'src/app/shared/interfaces/widget';
import { trendingMock, addedMock} from '../../shared/components/mocks/widget-mock'
import { widgetSliderMock } from '../../shared/components/mocks/widget-post-mock'
import { sliderNewsMock } from '../../shared/components/mocks/slider-news-mock'
import { SliderI } from 'src/app/shared/interfaces/slider';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  readMore:boolean=false;
  checkSwitch:boolean=true;
  dataTrending: WidgetI = trendingMock;
  dataAdded: WidgetI = addedMock;
  dataWidgetSlider: WidgetCardSliderI[]= widgetSliderMock;
  dataSliderNews: SliderI[] = sliderNewsMock;
  
  isChecked:boolean=true;
  
  constructor() { }

  ngOnInit(): void {
  }

  clickReadMore(){
    this.readMore=!this.readMore;
  }

  changeCheckSwitch(){
    this.checkSwitch=!this.checkSwitch;
  }

  changeChecked(){
    this.isChecked=!this.isChecked;
  }

}
