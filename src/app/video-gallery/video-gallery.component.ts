import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery';
import { LoginService } from '../useradmin/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent implements OnInit {
  userdata1: any;
  videodata:any;
  safeURL: any;
  videoUrl:any;
  


  constructor(private loginServe: LoginService,private notify: NotificationService, private _sanitizer: DomSanitizer) {
    
   }

  ngOnInit(): void {
    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/dashboard' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Video Gallery</span></a>");
});
this.userdata1 = localStorage.getItem('isLoggedIndata');
    let usdata1 = JSON.parse(this.userdata1);
    let userid={userid:usdata1._id};
this.loginServe.getvideo_gallery(userid).subscribe((data: any) => {
  console.log(data);
    this.videodata=data;
        });
  }


  deletevideo(data:any) {

    let userid=data._id;
     console.log(userid);
    this.loginServe.Delete_video_gallery(userid).subscribe((data: any) => {
      this.notify.showError(
        'Video Gallery are deleted successfully',
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
    this.loginServe.update_status_video_gallery(data,status_id).subscribe((data: any) => {
    
    console.log(data)
    })
  }

  safe_url(url)
  {
   return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
