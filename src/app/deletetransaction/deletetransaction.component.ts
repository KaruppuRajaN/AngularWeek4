import { Component } from '@angular/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-deletetransaction',
  templateUrl: './deletetransaction.component.html',
  styleUrl: './deletetransaction.component.css'
})
export class DeletetransactionComponent {
  tid:number=NaN;
  constructor(private service:RestService){}
  onSubmit():void{
    if(this.tid!=0)
      this.service.deleteTransaction(this.tid).subscribe((message)=>{
      
    },error=>this.tid=NaN);
    
  }
}
