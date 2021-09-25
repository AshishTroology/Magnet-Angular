import { Component, OnInit } from '@angular/core';
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
  selector: 'app-edit-image-gallery',
  templateUrl: './edit-image-gallery.component.html',
  styleUrls: ['./edit-image-gallery.component.css']
})
export class EditImageGalleryComponent implements OnInit {
    userForm!: FormGroup;
routeSub: any;
imagedata:any;
editordata:any;
 user_id:any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private loginservice: LoginService,private notify: NotificationService) { }

  ngOnInit(): void {
    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/image-gallery' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Edit Image Gallery</span></a>");
});
this.routeSub = this.route.params.subscribe((params) => {
      let dataid={id:params['id']}
      this.loginservice.editimage_gallery(dataid).subscribe((data: any) => {
       let imagedata=data;
       console.log(imagedata)
       this.user_id=imagedata[0]._id;
       console.log(this.user_id)
        this.initform(imagedata[0]);
        }); 
 });
  }

image_frame;
  onselectservice(e) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.image_frame = event.target.result;
      };
    }
  }


  initform(usdt) {
    this.image_frame = usdt.image_url;
    this.userForm = this.fb.group({
      image_title: [usdt.image_title],
    });
  }
 onSubmit(): void {
    this.userForm.value.image_photo=this.image_frame;
    this.loginservice.Update_image_gallery(this.userForm.value,this.user_id).subscribe((data: any) => {
      this.notify.showSuccess(
        'Image Gallery is update successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
    console.log(this.userForm.value);
   
  }

}
