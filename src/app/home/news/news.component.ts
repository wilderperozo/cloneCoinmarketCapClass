import { Component, OnInit } from '@angular/core';
import { WidgetI, WidgetSliderI } from 'src/app/shared/interfaces/widget';
import { trendingMock, addedMock} from '../../shared/components/widget/mocks/widget-mock'
import { sliderMock } from '../../shared/components/widget/mocks/widget-post-mock'
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
  dataSlider: WidgetSliderI = sliderMock;
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
