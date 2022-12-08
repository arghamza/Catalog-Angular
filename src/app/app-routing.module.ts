import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./product/products/products.component";
import {CustomersComponent} from "./customer/customers/customers.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {NewProductComponent} from "./product/new-product/new-product.component";
import {EditProductComponent} from "./product/edit-product/edit-product.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "", component: LoginComponent},
  {path: "admin", component: AdminTemplateComponent,canActivate:[AuthenticationGuard],children:[
      {path: "products", component: ProductsComponent},
      {path: "customers", component: CustomersComponent},
      {path: "newProduct", component: NewProductComponent},
      {path: "editProduct/:id", component: EditProductComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
