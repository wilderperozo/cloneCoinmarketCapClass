import { Component } from '@angular/core';

/////////////////////////////importar  libreria
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'cloneCoinMarketCap';

  ////// array de idiomas
  private idiomas: Array<string>;


 //modificar constructorpara el idoma
 constructor(public translate: TranslateService) {
    this.idiomas = ['es', 'en'];
    translate.addLangs(this.idiomas);
    translate.setDefaultLang('en');
  }

}
