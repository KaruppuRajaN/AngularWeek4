import { Component } from '@angular/core';
import { RestService } from '../service/rest.service';
import { Investor } from '../model/Investor';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrl: './investors.component.css'
})
export class InvestorsComponent {
  constructor(private service:RestService){}

  investors:Investor[]=[];
  ngOnInit():void{
    this.investors=this.getInvestors();
  }
  
  getInvestors():any{
    this.service.getAllInvestors().subscribe((investors)=>{
      this.investors=investors;

    });
    
  }
  // onSubmit(investor:Investor):void{
  //   this.service.updateInvestor(investor).subscribe((investor)=>{
  //       this.investors=this.getInvestors();
  //   });
  // }

}
