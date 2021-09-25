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
  selector: 'app-socialmediadetail',
  templateUrl: './socialmediadetail.component.html',
  styleUrls: ['./socialmediadetail.component.css'],
})
export class SocialmediadetailComponent implements OnInit {
  userdata1!: any;
  user_id: any;
  userForm!: FormGroup;
  social_usdt: any;

  constructor(private fb: FormBuilder, private loginServe:LoginService,private notify: NotificationService) {}

  ngOnInit(): void {
    $(document).ready(function () {
      $('#img_data').remove();
      $('#upper_part').append(
        "<a  href='/dashboard' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Social Media Links</span></a>"
      );
    });
    this.userdata1 = localStorage.getItem('isLoggedIndata');
    let usdata1 = JSON.parse(this.userdata1);
    this.loginServe
      .getUser_social_media(usdata1._id)
      .subscribe((data: any) => {
        this.initform(data);
      });

    this.user_id = usdata1._id;
    $(document).ready(function () {
      $('#img_data').remove();
      $('#upper_part').append(
        "<a  href='/dashboard' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Social Media Links</span></a>"
      );
    });
  }

  initform(usdt) {
    this.userForm = this.fb.group({
      facebook: [usdt.facebook],
      instagram: [usdt.instagram],
      twitter: [usdt.twitter],
      youtube: [usdt.youtube],
      linkedin: [usdt.linkedin],
      pintrest: [usdt.pintrest],
    });
  }

  onSubmit(): void {
    this.loginServe.updateUser_social_media(this.userForm.value,this.user_id).subscribe((data: any) => {
      this.notify.showSuccess(
        'Social Media details are save successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
    console.log(this.userForm.value);
  }
}
