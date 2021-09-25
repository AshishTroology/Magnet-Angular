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
  selector: 'app-add-testimonials',
  templateUrl: './add-testimonials.component.html',
  styleUrls: ['./add-testimonials.component.css']
})
export class AddTestimonialsComponent implements OnInit {
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
      $("#upper_part").append("<a  href='/testimonials' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Add Testimonials</span></a>");
});
this.initform();
  }

initform() {
    
  this.userform = this.fb.group({
    customer_name: [''],
    editor: [''],
  });
}
 onChange({ editor }) {
    const data = editor.getData();
    // console.log(data);
    this.editordata= data;
    
  }

    onSubmit(): void {
    this.userform.value.editor=this.editordata;
    this.loginServe.Add_testimonial(this.userform.value,this.user_id).subscribe((data: any) => {
      this.notify.showSuccess(
        'Testimonial are save successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
    console.log(this.userform.value, this.user_id);
   
  }

}
