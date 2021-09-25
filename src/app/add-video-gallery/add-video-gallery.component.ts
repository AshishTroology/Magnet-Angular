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
  selector: 'app-add-video-gallery',
  templateUrl: './add-video-gallery.component.html',
  styleUrls: ['./add-video-gallery.component.css']
})
export class AddVideoGalleryComponent implements OnInit {
  userform!: FormGroup;

  userdata1: any;
  user_id:any;

  constructor(private fb: FormBuilder,private loginServe:LoginService,private notify: NotificationService) { }

  ngOnInit(): void {
    this.userdata1 = localStorage.getItem('isLoggedIndata');
    let usdata1 = JSON.parse(this.userdata1);
    this.user_id=usdata1._id;
    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/video-gallery' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Add Video Gallery</span></a>");
});
this.initform();
  }

  initform() {

    this.userform = this.fb.group({
      video_title: [''],
    });
  }
  videoID;
  thumbnailurl;
  onBlur(event: any){
    var str = event.target.value; 
    var splitted = str.split("=", 9); 
    this.videoID=splitted[1];
    this.thumbnailurl='https://img.youtube.com/vi/'+this.videoID+'/hqdefault.jpg';
  
    // console.log(splitted[1]);
 
 }


  onSubmit(): void {
    this.userform.value.video_url='https://www.youtube.com/embed/'+this.videoID;
    this.loginServe.Add_video_gallery(this.userform.value,this.user_id).subscribe((data: any) => {
      this.notify.showSuccess(
        'Video Gallery are save successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
    console.log(this.userform.value, this.user_id);

  }

}
