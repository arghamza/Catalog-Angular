import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  productFormGroup!:FormGroup;
  constructor(private fb:FormBuilder,public productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.productFormGroup=this.fb.group({
      name : this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      price : this.fb.control(null,[Validators.required,Validators.min(200)]),
      quantity : this.fb.control(null,[Validators.required,Validators.min(5)]),
      promotion : this.fb.control(false,[Validators.required]),
    })
  }

  handleAddProduct() {
    console.log(this.productFormGroup.value);
    let product=this.productFormGroup.value;
    this.productService.addNewProduct(product).subscribe(
      {
        next: ()=>{
          alert("success")
          this.productFormGroup.reset()
        },
        error:(err)=>{
          console.log(err)
        }
      }
    )
    this.router.navigateByUrl("/admin/products")
  }


}
