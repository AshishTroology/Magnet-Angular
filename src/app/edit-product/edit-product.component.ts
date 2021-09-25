import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../useradmin/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  userForm!: FormGroup;
routeSub: any;
servicedata:any;
editordata:any;
 user_id:any;
  productdata: any;
  productimage: any;
  checkdata!: { field_name: any; value: any; };
  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private loginservice: LoginService,private notify: NotificationService) { }

  ngOnInit(): void {
    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/products' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Edit Product</span></a>");
});
this.routeSub = this.route.params.subscribe((params) => {
  // console.log(params); //log the entire params object
  // console.log(params['id']);
  let dataid={id:params['id']}
  this.loginservice.editproduct(dataid).subscribe((data: any) => {
   this.productdata=data;
   this.user_id=this.productdata[0]._id;
   this.productimage=this.productdata[0].product_images;
   console.log(this.productimage)
   console.log(this.productdata[0])
    this.initform(this.productdata[0]);
    }); 
});
  }
  initform(usdt) {
    this.editordata=usdt.service_description;
    this.userForm = this.fb.group({
      product_title: [usdt.product_title],
      product_price: [usdt.product_price],
      product_link:[usdt.product_link],
      list_price:[usdt.list_price],
    });
  }
  
  onChange({ editor }) {
    const data= editor.getData();

    this.editordata= data;
  }

  onSubmit(): void {
    this.userForm.value.editor=this.editordata;
    this.userForm.value.checkdata=this.checkdata;
    this.loginservice.Update_product(this.userForm.value,this.user_id).subscribe((data: any) => {
      console.log(data)
      this.notify.showSuccess(
        'Products are update successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
   
  }

  checkCheckBoxvalue(field_name:any,value:any){
    let valuedata=value.path[0].checked;
   this.checkdata={field_name:field_name._id,value:valuedata};
    
  }


}
