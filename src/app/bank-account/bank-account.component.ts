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
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {
  userForm!: FormGroup;
  editordata!:any;
  service: any;
  userdata1: any;
  user_id:any;
  constructor(private fb: FormBuilder,private loginServe:LoginService,private notify: NotificationService) { }

  ngOnInit(): void {

    this.userdata1 = localStorage.getItem('isLoggedIndata');
    let usdata1 = JSON.parse(this.userdata1);
    this.user_id=usdata1._id;
    let dataid=this.user_id;
    this.loginServe.getbankdetail(dataid).subscribe((data: any) => {
      let bankdata=data;
      // console.log(bankdata)
      // this.user_id=servicedata[0]._id;
      // console.log(this.user_id)
       this.initform(bankdata[0]);
       }); 

    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/dashboard' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Bank Account Detail</span></a>");
});
  }
  bank_value;
  bank_branch;
  onBlur(e)
  {

    console.log(e.target.value);

    let ifsc_data=e.target.value;
    console.log(ifsc_data)
    this.loginServe.get_ifsc(ifsc_data).subscribe((data: any) => {
      this.bank_value=data.BANK;
      this.bank_branch=data.BRANCH;
      // console.log(this.ifsc_value)

          });
    // this.loginServe.get_ifsc(ifsc_data).subscribe((data: any) => {
    //   console.log(data)

    //       });
  }

initform(usdt) {

  this.userForm = this.fb.group({
    bank_name: [usdt.bank_name],
    branch_name: [usdt.branch_name],
    account_type: [usdt.account_type],
    account_name: [usdt.account_name],
    account_number: [usdt.account_number],
    ifsc_code: [usdt.IFSC_code],
    gst_number: [usdt.GST_no],
    pan_card_number: [usdt.pancard_no],
    remark: [usdt.remark],
  });
}

onSubmit(): void {
  this.userForm.value.bank_name=this.bank_value;
  this.userForm.value.branch_name=this.bank_branch;
  this.loginServe.Add_bank_account_detail(this.userForm.value,this.user_id).subscribe((data: any) => {
    this.notify.showSuccess(
      'Bank Account Details are save successfully',
      'Congratulations'
    );
    setTimeout(function(){
      window.location.reload();
   }, 5000);
  })
  console.log(this.userForm.value,this.user_id);

}

}
