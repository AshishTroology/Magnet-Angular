import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import { LoginService } from '../useradmin/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
userdata1: any;
testimonialdata:any;
  constructor(private loginServe: LoginService,private notify: NotificationService) { }

  ngOnInit(): void {
    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/dashboard' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Testimonials</span></a>");
});
  this.userdata1 = localStorage.getItem('isLoggedIndata');
    let usdata1 = JSON.parse(this.userdata1);
    let userid={userid:usdata1._id};
this.loginServe.gettestimonials(userid).subscribe((data: any) => {
   this.testimonialdata=data;

        }); 
  }
		
    deletetestimonial(data:any){
      let userid=data._id;
          this.loginServe.Delete_testimonial(userid).subscribe((data: any) => {
            this.notify.showError(
              'Testimonials are deleted successfully',
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
      this.loginServe.update_status_testimonial(data,status_id).subscribe((data: any) => {
      
      console.log(data)
      })
    }
  

}
