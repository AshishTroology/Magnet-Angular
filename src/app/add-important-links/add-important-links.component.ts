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
  selector: 'app-add-important-links',
  templateUrl: './add-important-links.component.html',
  styleUrls: ['./add-important-links.component.css']
})
export class AddImportantLinksComponent implements OnInit {
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
      $("#upper_part").append("<a  href='/important-links' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Add Important Links</span></a>");
});
this.initform();
  }

  initform() {

    this.userform = this.fb.group({
      link_title: [''],
      link_url:[''],
    });
  }

  onSubmit(): void {

    this.loginServe.Add_important_link(this.userform.value,this.user_id).subscribe((data: any) => {
      this.notify.showSuccess(
        'Important Link are save successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
    console.log(this.userform.value, this.user_id);

  }

}
