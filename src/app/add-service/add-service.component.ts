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
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
 
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
      $("#upper_part").append("<a  href='/services' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i>Add Service</span></a>");
});
this.initform();
  }
  service_frame

  onselectcompanyFile(e)
  {
    if(e.target.files)
    {
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(event:any)=>{
        this.service_frame=event.target.result;
        console.log(this.service_frame);
      }
    }
  }
  initform() {
    
  this.userform = this.fb.group({
    service_title: [''],
    editor: [''],
    service_photo:[''],
  });
}

  onChange({ editor }) {
    const data = editor.getData();
    // console.log(data);
    this.editordata= data;
    
  }
  onSubmit(): void {
    this.userform.value.service_photo=this.service_frame;
    this.userform.value.editor=this.editordata;
    this.loginServe.AddUser_services(this.userform.value,this.user_id).subscribe((data: any) => {
      this.notify.showSuccess(
        'Services are save successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
    console.log(this.userform.value, this.user_id);
   
  }

}


function usdt(usdt) {
  throw new Error('Function not implemented.');
}

function initform() {
  throw new Error('Function not implemented.');
}

