import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Investor } from '../model/Investor';
import { Transactions } from '../model/Transactions';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http:HttpClient) { }
  getAllInvestors():Observable<Investor[]>{
    return this.http.get<Investor[]>("http://localhost:8081/investo/app.1.0/getallinvestors");
  }

  getAllTransactions():Observable<Transactions[]>{
    return this.http.get<Transactions[]>("http://localhost:8081/investo/app.1.0/getalltransactions");
  }

  saveInvestor(investor:Investor):Observable<string>{
    return this.http.post<string>("http://localhost:8081/investo/app.1.0/addinvestor",investor);
  }

  saveTransaction(transaction:Transactions):Observable<string>{
    return this.http.post<string>("http://localhost:8081/investo/app.1.0/addtransaction",transaction);
  }

  deleteTransaction(id:number):Observable<string>{
    return this.http.delete<string>("http://localhost:8081/investo/app.1.0/deletetransaction?id="+id);
  }
  updateInvestor(transaction:Transactions):Observable<string>{
    return this.http.put<string>("http://localhost:8081/investo/app.1.0/updateinvestor",transaction);
  }

  

}
