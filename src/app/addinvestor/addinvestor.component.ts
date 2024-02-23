import { Component } from '@angular/core';
import { Investor } from '../model/Investor';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-addinvestor',
  templateUrl: './addinvestor.component.html',
  styleUrl: './addinvestor.component.css'
})
export class AddinvestorComponent {
  constructor(private service:RestService){}

  investor:Investor=new Investor();
  onSubmit():void{
    console.log(this.investor);
    this.service.saveInvestor(this.investor).subscribe((message)=>{
      
      this.investor=new Investor();
    },error=>this.investor=new Investor());
  }
  
}
