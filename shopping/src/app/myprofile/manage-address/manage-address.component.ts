import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.scss']
})
export class ManageAddressComponent implements OnInit {
  
   id:any;

  
  // public hide: boolean = false;
  constructor(private fb: FormBuilder, public router: Router, public productService: ProductService) { 
    this.id = localStorage.getItem('user_id');
  }
  ngOnInit() {
   
  }


  submitAddress(addressForm:NgForm) {
    console.log(addressForm.value);
    if (addressForm.valid) {
      this.productService.postAddress(addressForm.value).subscribe((res) => {
        console.log(res);
       //let id:any= res._id;
     // localStorage.setItem('address_id;',JSON.stringify(id));
     // localStorage.setItem('address_id', id);
        this.productService.products().subscribe((res) => {
          console.log(res);
          localStorage.removeItem('products');
          localStorage.removeItem('cartNumber');
          localStorage.removeItem('totalCost');
          localStorage.removeItem('address_id');
          this.router.navigate(['/myprofile/order'])
        }, (err) => {
          console.log(err);
        })
      },
        (err) => {
          console.log(err);
        })
    }
  }
  /*export class AddressDialogComponent implements OnInit {
  user_id:any
  constructor(private productService:ProductsService) {
    this.user_id = localStorage.getItem('user_id');
   }

  ngOnInit(): void {
  }


  submitAddress(f:NgForm){
    console.log(f.value);
    // let user_id = 
    this.productService.postAddress(this.user_id , f.value).subscribe((res)=>{
      console.log(res);
      this.productService.getTotalAddress()
      // this.route.navigate(['/order-summary'])
    } , (err)=>{
      console.log(err);
    })
  }

}
  */

}