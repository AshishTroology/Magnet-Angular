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
  selector: 'app-edit-important-links',
  templateUrl: './edit-important-links.component.html',
  styleUrls: ['./edit-important-links.component.css']
})
export class EditImportantLinksComponent implements OnInit {
  userForm!: FormGroup;
  routeSub: any;
  linkdata:any;
  editordata:any;
   user_id:any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private loginservice: LoginService,private notify: NotificationService) { }

  ngOnInit(): void {
    $( document ).ready(function() {
      $("#img_data").remove();
      $("#upper_part").append("<a  href='/important-links' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> Edit Important Links</span></a>");
});
this.routeSub = this.route.params.subscribe((params) => {
  let dataid={id:params['id']}
  this.loginservice.editimportant_link(dataid).subscribe((data: any) => {
   let linkdata=data;
   console.log(linkdata)
   this.user_id=linkdata[0]._id;
   console.log(this.user_id)
    this.initform(linkdata[0]);
    });
});
  }

  initform(usdt) {

    this.userForm = this.fb.group({
      link_title: [usdt.link_title],
      link_url: [usdt.link_url],
    });
  }

  onSubmit(): void {

    this.loginservice.Update_important_link(this.userForm.value,this.user_id).subscribe((data: any) => {
      this.notify.showSuccess(
        'Impotant Links are update successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
    console.log(this.userForm.value);

  }

}
