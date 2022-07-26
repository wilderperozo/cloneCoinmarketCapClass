import { Component, Input, OnInit } from '@angular/core';
import {WidgetI} from '../../interfaces/widget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() dataWidget?: WidgetI;
  constructor() { }

  ngOnInit(): void {
  }

}
