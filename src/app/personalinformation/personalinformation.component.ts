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
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.component.html',
  styleUrls: ['./personalinformation.component.css'],
})
export class PersonalinformationComponent implements OnInit {
  userForm!: FormGroup;
  submitted!: boolean;
  userdata1: any;
  profile_image: any;
  user_id: any;
  main_form_status=true;
  constructor(
    private fb: FormBuilder,
    private loginServe: LoginService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.userdata1 = localStorage.getItem('isLoggedIndata');
    let usdata1 = JSON.parse(this.userdata1);
    this.initform(usdata1);
    this.user_id = usdata1._id;
    $(document).ready(function () {
      $('#img_data').remove();
      $('#upper_part').append(
        "<a  href='/dashboard' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Personal Detail</span></a>"
      );
    });
  }

  AddImage(){
    this.main_form_status=false;
  }

  cover_frame;
  profile_frame;
  company_frame;

  onselectcoverFile(e) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.cover_frame = event.target.result;
        console.log(this.cover_frame);
      };
    }
  }

  onselectprofileFile(e) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.profile_frame = event.target.result;
        console.log(this.profile_frame);
      };
    }
  }

  onselectcompanyFile(e) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.company_frame = event.target.result;
        console.log(this.company_frame);
      };
    }
  }

  initform(usdt) {
    this.profile_frame = usdt.user_image;
    this.cover_frame = usdt.cover_photo;
    this.company_frame = usdt.company_logo;
    this.userForm = this.fb.group({
      first_name: [usdt.first_name],
      last_name: [usdt.last_name],
      designation: [usdt.designation],
      company_name: [usdt.company_name],
      cover_photo: [''],
      user_image: [''],
      company_logo: [''],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.userForm.value.company_logo = this.company_frame;
    this.userForm.value.cover_photo = this.cover_frame;
    this.userForm.value.user_image = this.profile_frame;
    if (this.userForm.invalid) {
      console.log(this.userForm.invalid, this.userForm);
      return;
    }
    console.log(this.userForm.invalid, this.userForm);

    this.loginServe
      .updateUser(this.userForm.value, this.user_id)
      .subscribe((data: any) => {
        console.log('user created', data);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('isLoggedIndata', JSON.stringify(data));
        this.notify.showSuccess(
          'Personal Details are save successfully',
          'Congratulations'
        );
        // window.location.reload();
      });
  }


}
