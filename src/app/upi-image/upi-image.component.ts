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
  selector: 'app-upi-image',
  templateUrl: './upi-image.component.html',
  styleUrls: ['./upi-image.component.css']
})
export class UpiImageComponent implements OnInit {
  userForm!: FormGroup;

  userdata1: any;
  user_id:any;
  constructor(private fb: FormBuilder,private loginServe:LoginService,private notify: NotificationService) { }

  ngOnInit(): void {
    this.userdata1 = localStorage.getItem('isLoggedIndata');
    let usdata1 = JSON.parse(this.userdata1);
    this.user_id=usdata1._id;
    let dataid=this.user_id;
    this.loginServe.getupidetail(dataid).subscribe((data: any) => {
      let upidata=data;
      // console.log(upidata)
       this.initform(upidata[0]);
       }); 

    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/dashboard' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> UPI Image</span></a>");
});
  }
  upi_frame

  onselectcompanyFile(e)
  {
    if(e.target.files)
    {
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(event:any)=>{
        this.upi_frame=event.target.result;
      }
    }
  }

  initform(usdt) {
    this.upi_frame = usdt.upi_image;
    this.userForm = this.fb.group({
      upi_id: [usdt.upi_id],
    });
  }

  onSubmit(): void {
    this.userForm.value.upi_image=this.upi_frame;
    this.loginServe.Add_upi_image(this.userForm.value,this.user_id).subscribe((data: any) => {
      this.notify.showSuccess(
        'UPI Details are save successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
    console.log(this.userForm.value,this.user_id);

  }

}
