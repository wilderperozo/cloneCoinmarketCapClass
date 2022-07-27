import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider";
import { SliderI } from '../../interfaces/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss', './slider.scss']
})
export class SliderComponent implements OnInit {
  @Input() dataSlider?: SliderI[];
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>;
  slider!: KeenSliderInstance;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      breakpoints: {
        "(min-width: 280px)": {
          slides: { perView: 1,  spacing: 6},
        },
        "(min-width: 540px)": {
          slides: { perView: 2,  spacing: 8},
        },
        "(min-width: 850px)": {
          slides: { perView: 3,  spacing: 8},
        },
        "(min-width: 1030px)": {
          slides: { perView: 4,  spacing: 8 },
        },
        "(min-width: 1600px)": {
          slides: { perView: 5,  spacing: 8 },
        },
        "(min-width: 1800px)": {
          slides: { perView: 6,  spacing: 8 },
        },
      },
      slides: { perView: 4},
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

  redirectTo(url:string){
    window.open(url,'_blank')
  }


}




