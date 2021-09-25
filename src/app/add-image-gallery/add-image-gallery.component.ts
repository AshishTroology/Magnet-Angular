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
  selector: 'app-add-image-gallery',
  templateUrl: './add-image-gallery.component.html',
  styleUrls: ['./add-image-gallery.component.css']
})
export class AddImageGalleryComponent implements OnInit {
  userform!: FormGroup;
  editordata!:any;
  service: any;
  userdata1: any;
  user_id:any;
  constructor(private fb: FormBuilder,private loginServe:LoginService,private notify: NotificationService) { }

  ngOnInit(): void {
    this.userdata1 = localStorage.getItem('isLoggedIndata');
    let usdata1 = JSON.parse(this.userdata1);
    this.user_id=usdata1._id;
    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/image-gallery' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Add Image</span></a>");
});
this.initform();
  }
  image_frame

  onselectcompanyFile(e)
  {
    if(e.target.files)
    {
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(event:any)=>{
        this.image_frame=event.target.result;
      }
    }
  }

    initform() {

  this.userform = this.fb.group({
    image_title: [''],
  });
}

  onSubmit(): void {
    this.userform.value.image=this.image_frame;
    this.loginServe.Add_image_gallery(this.userform.value,this.user_id).subscribe((data: any) => {
      this.notify.showSuccess(
        'Image Gallery are save successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
    console.log(this.userform.value, this.user_id);

  }

}
