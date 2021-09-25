import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { LoginService } from '../useradmin/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  userData: any;
  userForm!: FormGroup;
  submitted = false;
  lang!: string;
  routeSub: any;
  userCreated!: boolean;
  Industrydata: any;
  language: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  industry_item:any;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginServe: LoginService
  ) {}

  ngOnInit(): void {


    this.dropdownSettings = {
      singleSelection: true,
      idField: 'Description',
      textField: 'Description',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
    };


    this.loginServe.getIndustry().subscribe((Industrydata: any) => {
      console.log('industry list', Industrydata);
      this.Industrydata = Industrydata;
    });
    this.routeSub = this.route.params.subscribe((params) => {
      console.log(params); //log the entire params object
      console.log(params['lang']); //log the value of id
      this.language = params['lang'];
    });
    if (history.state.data != undefined) {
      this.userData = JSON.parse(history.state.data.data);
      this.lang = history.state.lang;
      this.userData.dialcode = '+91';
    } else {
      window.location.href = '/';
    }
    this.initform(this.userData);
  }
  onItemSelect(item: any) {
    console.log(item.Description);
    this.industry_item = item.Description;
  }

  initform(_user) {
    this.userForm = this.fb.group({
      user_image: [_user.photoUrl, Validators.required],
      user_email: [_user.email, Validators.required],
      first_name: [_user.firstName, Validators.required],
      last_name: [_user.lastName, Validators.required],
      contact_no: ['', Validators.required],
      gender: ['Male', Validators.required],
      industry_name: [this.industry_item, Validators.required],
      countryCode: [_user.dialcode, Validators.required],
    });
  }

  onCountryChange(event) {
    console.log(event);
    this.userData.dialcode = event.dialcode;
  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
     this.userForm.value.industry_name = this.industry_item;
    if (this.userForm.invalid) {
      // console.log(this.userForm.invalid, this.userForm, this.industry_item);
      return;
    }

    // console.log(
    //   this.userForm.invalid,
    //   this.userForm,
    //   this.lang,
    //   this.industry_item
    // );

    this.loginServe
      .createUser(this.userForm.value, this.language)
      .subscribe((data: any) => {
        console.log('user created', data);
        this.userCreated = true;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', this.userData.authToken);
        localStorage.setItem('isLoggedIndata', JSON.stringify(data));
        this.router.navigate(['/dashboard'], {
          state: { data: { data } },
        });
      });
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

function hideloader() {
  throw new Error('Function not implemented.');
}

function logindata(logindata: any) {
  throw new Error('Function not implemented.');
}

