import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { LoginService } from '../useradmin/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-contactdetail',
  templateUrl: './contactdetail.component.html',
  styleUrls: ['./contactdetail.component.css']
})
export class ContactdetailComponent implements OnInit {
  userForm!: FormGroup;
  submitted!: boolean;
  userdata1: any;
  user_id:any;
  constructor(private fb: FormBuilder, private loginservice: LoginService,private notify: NotificationService) { }

  ngOnInit(): void {
    this.userdata1 = localStorage.getItem('isLoggedIndata');
    let usdata1 = JSON.parse(this.userdata1);
    this.user_id=usdata1._id;
    let dataid=this.user_id;
    this.loginservice.getcontactdetail(dataid).subscribe((data: any) => {
      let contactdata=data;
      // console.log(upidata)
       this.initform(contactdata[0]);
       }); 
    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/dashboard' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Contact Detail</span></a>");
});
  }
  District;
  State;
  Country;
  onBlur(e)
  {

    console.log(e.target.value);

    let pincode_data=e.target.value;
    console.log(pincode_data)
    this.loginservice.getpincode_detail(pincode_data).subscribe((data: any) => {
      let data1=JSON.parse(data);
      console.log(data1[0].PostOffice[0])
      this.District=data1[0].PostOffice[0].District;
      this.State=data1[0].PostOffice[0].State;
      this.Country=data1[0].PostOffice[0].Country;

          });
    // this.loginServe.get_ifsc(ifsc_data).subscribe((data: any) => {
    //   console.log(data)

    //       });
  }




  initform(usdt) {
    this.userForm = this.fb.group({
      mobile_number: [usdt.mobile_number],
      whatsapp_number: [usdt.whatsapp_number],
      email: [usdt.email],
      website: [usdt.website],
      telegram: [usdt.telegram],
      address1: [usdt.address1],
      address2: [usdt.address2],
      pincode: [usdt.pincode],
      city: [usdt.city],
      state: [usdt.state],
      country: [usdt.country],
    });
  }

  onSubmit(): void {
    this.userForm.value.city=this.District;
  this.userForm.value.state=this.State;
  this.userForm.value.country=this.Country;
    this.loginservice.updateUser_contact_detail(this.userForm.value,this.user_id).subscribe((data: any) => {
      this.notify.showSuccess(
        'Contact Detail are save successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
    console.log(this.userForm.value);
    
    
  }

}
