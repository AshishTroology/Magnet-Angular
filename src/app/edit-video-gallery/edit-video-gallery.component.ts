import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery'; 
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../useradmin/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-edit-video-gallery',
  templateUrl: './edit-video-gallery.component.html',
  styleUrls: ['./edit-video-gallery.component.css']
})
export class EditVideoGalleryComponent implements OnInit {
  userForm!: FormGroup;
  routeSub: any;
  videodata:any;
  editordata:any;
   user_id:any;
  videoID: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private loginservice: LoginService,private notify: NotificationService,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/video-gallery' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Edit Video Gallery</span></a>");
});
this.routeSub = this.route.params.subscribe((params) => {
  let dataid={id:params['id']}
   this.loginservice.editvideo_gallery(dataid).subscribe((data: any) => {
     console.log(data)
   this.videodata=data;
   this.user_id=this.videodata[0]._id;
    this.initform(this.videodata[0]);
   }); 
});
  }

  initform(usdt) {
    this.userForm = this.fb.group({
      video_title: [usdt.video_title],
      video_url: [usdt.video_url],
    });
  }
  onBlur(event: any){
    var str = event.target.value; 
    var splitted = str.split("=", 9); 
    this.videoID=splitted[1];
 }

  onSubmit(): void {
    this.userForm.value.video_url='https://www.youtube.com/embed/'+this.videoID;
    this.loginservice.Update_video_gallery(this.userForm.value,this.user_id).subscribe((data: any) => {
      this.notify.showSuccess(
        'Video Gallery is update successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
    console.log(this.userForm.value);
   
  }
  safe_url(url)
  {
   return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
