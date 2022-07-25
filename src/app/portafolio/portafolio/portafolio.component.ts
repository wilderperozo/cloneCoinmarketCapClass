import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { CoinsService } from 'src/app/shared/coins.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {
  public listcoins:any = [];
  public listcoinsFirstTen:any = [];
  public listFiltered:any = [];
  public searchTerm$= new Subject<any>();
  chosenCoin:any;
  chosenCoinObject:any;

  ngOnInit(): void {
    this.getTypeOfCoins();
    this.filterList();
  }

  closeResult = '';

  constructor(private modalService: NgbModal, private coinService:CoinsService) {}

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public getTypeOfCoins(){
   this.coinService.getCoins()
   .subscribe({
    next: data => {
    console.log(data);
    this.listcoins=data;
    this.listFiltered=this.listcoins;
    },
    error: error => {
      console.log(JSON.stringify(error.error.message));
    }
  })
  }

  filterList(): void {
    this.searchTerm$.subscribe(term => {
      console.log(term.value);
       this.listFiltered = this.listcoins
        .filter((item:any) => item.name.toLowerCase().indexOf(term.value.toLowerCase()) >= 0).slice(0,10);
    });
  }

  addTransaction(contentTransaction:any , coin:any){
   console.log("añadir transaccion");
   this.modalService.open(contentTransaction, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  console.log(coin)
  this.chosenCoinObject=coin;
  this.chosenCoin= `
      <div style="display:flex; width:80%;">
        <img  style="width:24px; height:24px; border-radius: 10px;" src="${coin.image}">
        <p style="font-family: 'Rubik', sans-serif;padding:0 3px;">${coin.name.charAt(0).toUpperCase()+coin.name.slice(1,coin.name.length)}</p>
        <p class="lettherGray" style="font-family: 'Rubik', sans-serif; color:gray;">${coin.symbol.toUpperCase()}</p>
      </div>
  `
  }

  addCoinNewPrice(coin:any){
    this.chosenCoinObject=coin;
  }


}
