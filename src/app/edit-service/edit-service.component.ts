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
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  userForm!: FormGroup;
routeSub: any;
servicedata:any;
editordata:any;
 user_id:any;
  constructor(  private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private loginservice: LoginService,private notify: NotificationService) { }

  ngOnInit(): void {
    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/services' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i>Edit Service</span></a>");
});
 this.routeSub = this.route.params.subscribe((params) => {
      // console.log(params); //log the entire params object
      // console.log(params['id']);
      let dataid={id:params['id']}
      this.loginservice.editservices(dataid).subscribe((data: any) => {
       let servicedata=data;
       this.user_id=servicedata[0]._id;
       console.log(this.user_id)
        this.initform(servicedata[0]);
        }); 
 });
  }
  service_frame;
  data;
  onselectservice(e) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.service_frame = event.target.result;
      };
    }
  }

  initform(usdt) {
    this.service_frame = usdt.service_image;
    this.editordata=usdt.service_description;
    this.userForm = this.fb.group({
      service_title: [usdt.service_title],
      editor: [''],
    });
  }

   onChange({ editor }) {
    const data= editor.getData();

    this.editordata= data;
  }
 onSubmit(): void {
    this.userForm.value.service_photo=this.service_frame;
    this.userForm.value.editor=this.editordata;
    this.loginservice.Update_services(this.userForm.value,this.user_id).subscribe((data: any) => {
      this.notify.showSuccess(
        'Services are update successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
    console.log(this.userForm.value);
   
  }
}
