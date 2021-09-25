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
  selector: 'app-edit-testimonials',
  templateUrl: './edit-testimonials.component.html',
  styleUrls: ['./edit-testimonials.component.css']
})
export class EditTestimonialsComponent implements OnInit {
   userForm!: FormGroup;
routeSub: any;
editordata:any;
 user_id:any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private loginservice: LoginService,private notify: NotificationService) { }

  ngOnInit(): void {
    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/testimonials' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Edit Testimonials</span></a>");
});
 this.routeSub = this.route.params.subscribe((params) => {
      // console.log(params); //log the entire params object
      // console.log(params['id']);
      let dataid={id:params['id']}
      this.loginservice.edittestimonial(dataid).subscribe((data: any) => {
       let testimonialdata=data;
       this.user_id=testimonialdata[0]._id;
       console.log(this.user_id)
        this.initform(testimonialdata[0]);
        }); 
 });
  }

  initform(usdt) {
    this.editordata=usdt.service_description;
    this.userForm = this.fb.group({
      customer_name: [usdt.customer_name],
      editor: [''],
    });
  }

     onChange({ editor }) {
    const data= editor.getData();

    this.editordata= data;
  }

   onSubmit(): void {
    this.userForm.value.editor=this.editordata;
    this.loginservice.Update_testimonial(this.userForm.value,this.user_id).subscribe((data: any) => {
      this.notify.showSuccess(
        'Testimonial is update successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
    console.log(this.userForm.value);
   
  }

}
