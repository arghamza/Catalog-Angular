import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './product/products/products.component';
import { CustomersComponent } from './customer/customers/customers.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './tools/login/login.component';
import { AdminTemplateComponent } from './tools/admin-template/admin-template.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import {HttpClientModule} from "@angular/common/http";
import {NewCustomerComponent} from "./customer/new-customer/new-customer.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";
import {BillsComponent} from "./bill/bills/bills.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    LoginComponent,
    AdminTemplateComponent,
    NewProductComponent,
    EditProductComponent,
    NewCustomerComponent,
    EditCustomerComponent,
    BillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
