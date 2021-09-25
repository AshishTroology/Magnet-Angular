import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { LoginService } from '../useradmin/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isLoggedIn: any;
  isLoggedIndata:any;
  dashboarddata:any;
  user_id: any;
  settingdata:any;
  constructor(private router: Router, private fb: FormBuilder,
    private loginServe: LoginService) {}

  ngOnInit(): void {
    this.isLoggedIndata = localStorage.getItem('isLoggedIndata');
    this.dashboarddata = JSON.parse(this.isLoggedIndata);
    // console.log(this.dashboarddata.first_name);
    this.user_id = this.dashboarddata._id;
    this.loginServe.get_setting_detail(this.user_id).subscribe((data: any) => {
     this.settingdata=data[0];
    
     console.log(this.settingdata)
       }); 
  }

  checkCheckBoxvalue(field_name:any,value:any){
    let valuedata=value.path[0].checked;
    let data={field_name:field_name,value:valuedata};
    console.log(field_name,valuedata)
    this.loginServe.update_setting(data,this.user_id).subscribe((data: any) => {
    console.log(data)
    })
  }
}
