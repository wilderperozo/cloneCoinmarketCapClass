import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {path: 'https://s2.coinmarketcap.com/static/new-alerts/61152481ad8e1000124fc878/img/1639738636872_Free-API-Sponsorship-Program-(updated)-280x136.png'},
    {path: 'https://s2.coinmarketcap.com/static/new-alerts/611522c732a47c001239468a/img/1647313709257_Webp.net-compress-image (4).jpg'},
    {path: 'https://s2.coinmarketcap.com/static/new-alerts/613f25cbef9a5a001905f323/img/1658758275001_Crypto-and-Music-Thumbnail_280x136 (1).jpg'},
    {path: 'https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1658294410589_Caduceus-280x136.jpg'},
    {path: 'https://s2.coinmarketcap.com/static/new-alerts/61152358029ab00019681d99/img/1652808094126_Frame 3.png'},
    {path: 'https://s2.coinmarketcap.com/static/new-alerts/6115224cb91ba00012e951d7/img/1658278139252_img_v2_1131a61a-1c3e-4d28-8b71-ebbe0d6135fg.png'},
    {path: 'https://s2.coinmarketcap.com/static/new-alerts/611521ecc3074e0013b0c4a9/img/1658645665338_290x136.png'},
    {path: 'https://s2.coinmarketcap.com/static/new-alerts/6115224cb91ba00012e951d7/img/1658278139252_img_v2_1131a61a-1c3e-4d28-8b71-ebbe0d6135fg.png'},
    {path: 'https://s2.coinmarketcap.com/static/new-alerts/611522c732a47c001239468a/img/1647313709257_Webp.net-compress-image (4).jpg'}
  ];

}
