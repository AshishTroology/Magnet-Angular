import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoginService } from '../useradmin/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-important-links',
  templateUrl: './important-links.component.html',
  styleUrls: ['./important-links.component.css']
})
export class ImportantLinksComponent implements OnInit {
  userdata1: any;
  linkdata:any;
  constructor(private loginServe: LoginService,private notify: NotificationService) { }

  ngOnInit(): void {
    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/dashboard' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Important Links</span></a>");
});
this.userdata1 = localStorage.getItem('isLoggedIndata');
let usdata1 = JSON.parse(this.userdata1);
let userid={userid:usdata1._id};
this.loginServe.getimportant_link(userid).subscribe((data: any) => {

this.linkdata=data;

    });

  }

  deletelink(data:any) {

    let userid=data._id;
     console.log(userid);
    this.loginServe.Delete_important_link(userid).subscribe((data: any) => {
      this.notify.showError(
        'Important Link are deleted successfully',
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
    this.loginServe.update_status_important_links(data,status_id).subscribe((data: any) => {
    
    console.log(data)
    })
  }

}
