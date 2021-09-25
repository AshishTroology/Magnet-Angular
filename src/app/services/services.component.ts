import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import { LoginService } from '../useradmin/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
userdata1: any;
servicedata:any;
  constructor(private loginServe: LoginService,private notify: NotificationService) { }

  ngOnInit(): void {
    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/dashboard' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i>  Service</span></a>");
});
this.userdata1 = localStorage.getItem('isLoggedIndata');
    let usdata1 = JSON.parse(this.userdata1);
    let userid={userid:usdata1._id};
this.loginServe.getservices(userid).subscribe((data: any) => {
    this.servicedata=data;

        }); 
  }

  deleteservice(data:any) {
   
    let userid=data._id;
    //  console.log(userid);
    this.loginServe.Delete_services(userid).subscribe((data: any) => {
      this.notify.showError(
        'Services are deleted successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);

        }); 
  }

  checkCheckBoxvalue(field_name:any,value:any){
    let valuedata=value.path[0].checked;
    let data={value:valuedata};
    let status_id=field_name._id;
    // console.log(field_name._id,valuedata)
    this.loginServe.update_status_service(data,status_id).subscribe((data: any) => {
    
    console.log(data)
    })
  }
}

