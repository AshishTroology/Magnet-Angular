import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { LoginService } from '../useradmin/login.service';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  previews: string[] = [];
  userform!: FormGroup;
  editordata!:any;
  service: any;
  userdata1: any;
  user_id:any;
  constructor(private fb: FormBuilder,private loginServe:LoginService,private notify: NotificationService) { }

  ngOnInit(): void {
    this.userdata1 = localStorage.getItem('isLoggedIndata');
    let usdata1 = JSON.parse(this.userdata1);
    this.user_id=usdata1._id;
    this.initform();
    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/products' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i>Add Product</span></a>");
});

  }

  onFileChange(event: any): void {
    
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }
  initform() {
    
    this.userform = this.fb.group({
      product_title: [''],
      product_price:[''],
      list_price:[''],
      product_link:[''],
      editor: [''],
    });
  }

  
  onChange({ editor }) {
    const data = editor.getData();
    // console.log(data);
    this.editordata= data;
    
  }

  onSubmit(): void {
    this.userform.value.service_photo=this.previews;
    this.userform.value.editor=this.editordata;
    this.loginServe.AddUser_products(this.userform.value,this.user_id).subscribe((data: any) => {
      this.notify.showSuccess(
        'Products are save successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
    console.log(this.userform.value, this.user_id);
   
  }

}
