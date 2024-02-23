import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InvestmentApp';
  listAction:boolean=false;
  addIAction:boolean=false;
  addTAction:boolean=false;
  deleteTAction:boolean=false;
  listTransactions:boolean=false;
  onSubmit(id:number){
    if(id==1){
      this.listAction=true;
      this.addTAction=false;
      this.addIAction=false;
      this.listTransactions=false;
      this.deleteTAction=false;
    }
    else if(id==2){
      this.addIAction=true;
      this.addTAction=false;
      this.listAction=false;
      this.listTransactions=false;
      this.deleteTAction=false;
    }
    else if(id==3){
      this.listTransactions=true;
      this.listAction=false;
      this.addIAction=false;
      this.addTAction=false;
      this.deleteTAction=false;
    }
    else if(id==4){
      this.addTAction=true;
      this.listTransactions=false;
      this.listAction=false;
      this.addIAction=false;
      this.deleteTAction=false;
    }
    else if(id==5){
      this.addTAction=false;
      this.listTransactions=false;
      this.listAction=false;
      this.addIAction=false;
      this.deleteTAction=true;
    }
  }
}
