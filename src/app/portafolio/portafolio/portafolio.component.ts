import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { CoinsService } from 'src/app/shared/coins.service';
import { Coin } from 'src/app/shared/interfaces/portafolio';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {
  public listcoins:any = [];
  public listFiltered:any = [];
  public searchTerm$= new Subject<any>();
  public quantity:number= 0.00;
  public totalSpent:number= 0;
  public selectedCoin!:Coin;
  public chosenCoinDiv:any;
  public closeResult = '';
  public errorAddTransaction:boolean =false;
  public successfulAddTransaction:boolean =false;


  ngOnInit(): void {
    this.getTypeOfCoins();
    this.filterList();
  }

  constructor(private modalService: NgbModal, private coinService:CoinsService) {}

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason = (reason: any): string => {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public getTypeOfCoins = () => {
   this.coinService.getCoins()
   .subscribe({
      next: data => {
      this.listcoins=data;
      this.listFiltered=this.listcoins;
      },
      error: error => {
        console.error(error);
      }
    })
  }

  filterList = (): void => {
    this.searchTerm$.subscribe(term => {
       this.listFiltered = this.listcoins
        .filter((item:any) => item.name.toLowerCase().indexOf(term.value.toLowerCase()) >= 0).slice(0,10);
    });
  }

  addTransactionModal = (contentTransaction:any , coin:Coin): void => {
    this.modalService.open(contentTransaction, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.selectedCoin=coin;
    this.chosenCoinDiv= `
    <div id="divFirstCoin">
      <img src="${coin.image}">
      <p id="divFirstCoinp1">${coin.name.charAt(0).toUpperCase()+coin.name.slice(1,coin.name.length)}</p>
      <p id="divFirstCoinp2" >${coin.symbol.toUpperCase()}</p>
    </div>
    `
  }

  newSelectedValue = (coin:Coin):void => {
    this.selectedCoin= coin;
    this.totalSpent= coin.current_price*this.quantity;
  }

  addTransaction = (coin:Coin, total:number) => {
   if((coin.current_price === null)||(coin.current_price === 0)){
    this.errorAddTransaction = true;
    setTimeout(() => { this.errorAddTransaction = false; }, 1500)
   } else if((this.quantity === null)||(this.quantity === 0)){
    this.errorAddTransaction = true;
    setTimeout(() => { this.errorAddTransaction = false }, 1500)
   } else{
    localStorage.setItem('priceTotal',`${total}`);
    this.successfulAddTransaction=true;
    setTimeout(() => { this.successfulAddTransaction=false,  window.location.reload() }, 1500);
   }
   console.log( "localStorage.getItem('price')")
   console.log( localStorage.getItem('priceTotal'))
  }

}
