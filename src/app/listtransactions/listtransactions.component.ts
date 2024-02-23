import { Component } from '@angular/core';
import { RestService } from '../service/rest.service';
import { Transactions } from '../model/Transactions';

@Component({
  selector: 'app-listtransactions',
  templateUrl: './listtransactions.component.html',
  styleUrl: './listtransactions.component.css'
})
export class ListtransactionsComponent {
  constructor(private service:RestService){}

  transactions:Transactions[]= [];
  ngOnInit():void{
    this.transactions=this.getTransactions();
  }
  
  getTransactions():any{
    this.service.getAllTransactions().subscribe((transactions)=>{
      this.transactions=transactions;

    });
}
}
