import { Component } from '@angular/core';
import { RestService } from '../service/rest.service';
import { Transactions } from '../model/Transactions';

@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrl: './addtransaction.component.css'
})
export class AddtransactionComponent {
  constructor(private service:RestService){}
 
   transaction:Transactions = new Transactions();
  onSubmit():void{
    this.service.saveTransaction(this.transaction).subscribe((message)=>{
      
    },error=>this.transaction=new Transactions());
    this.service.updateInvestor(this.transaction).subscribe((message)=>{
      this.transaction=new Transactions();
    },error=>this.transaction=new Transactions());
  }
}
