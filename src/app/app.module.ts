import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { InvestorsComponent } from './investors/investors.component';
import { AddinvestorComponent } from './addinvestor/addinvestor.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ListtransactionsComponent } from './listtransactions/listtransactions.component';
import { AddtransactionComponent } from './addtransaction/addtransaction.component';
import { DeletetransactionComponent } from './deletetransaction/deletetransaction.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestorsComponent,
    AddinvestorComponent,
    ListtransactionsComponent,
    AddtransactionComponent,
    DeletetransactionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
