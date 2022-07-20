import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  constructor(
    private modal:NgbModal,
  ) { }

  ngOnInit(): void {
  }

}
