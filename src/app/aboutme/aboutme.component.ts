import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoginService } from '../useradmin/login.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import * as classicEditor from "@ckeditor/ckeditor5-build-classic";
import { ChangeEvent } from "@ckeditor/ckeditor5-angular/ckeditor.component";
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
})
export class AboutmeComponent implements OnInit {
  Industrydata: any;
  userdata1: any;
  industry_selected: any;
  userform!: FormGroup;
  editordata!:any;
  user_id: any;
  config: {};
  constructor(
    private loginServe: LoginService,
    private fb: FormBuilder,
    private notify: NotificationService
  ) {
     this.config ={
      allowedContent: false,
      forcePasteAsPlainText: true,
      // removePlugins: 'horizontalrule,tabletools,specialchar,about,list,others', 
      removeButtons:'Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Link,Unlink,Anchor,Maximize,ShowBlocks,About'} ;
  
   
    
  }
  

  ngOnInit(): void {
    $(document).ready(function () {
      $('#img_data').remove();
      $('#upper_part').append(
        "<a  href='/dashboard' class='backPage'><span><i class='fa fa-arrow-left' aria-hidden='true'></i> About Me</span></a>"
      );
    });
    this.userdata1 = localStorage.getItem('isLoggedIndata');
    let usdata1 = JSON.parse(this.userdata1);
    this.user_id=usdata1._id;
    this.industry_selected = usdata1.industry_name;
    this.loginServe.getIndustry().subscribe((Industrydata: any) => {
      console.log('industry list', Industrydata);
      this.Industrydata = Industrydata;
    });

    this.userform = this.fb.group({
      template: [''],
      industry: [''],
      editor: [''],
    });
    this.setDefaultValue();
  
  }

  setDefaultValue() {
    this.userform.patchValue({
      industry: this.industry_selected,
    });
  }

  onSubmit(): void {
    this.userform.value.editor=this.editordata;
    this.loginServe.updateUser_about_me(this.userform.value,this.user_id).subscribe((data: any) => {
      this.notify.showSuccess(
        'About me are save successfully',
        'Congratulations'
      );
      setTimeout(function(){
        window.location.reload();
     }, 5000);
    })
    console.log(this.userform.value, this.user_id);
  }

  onChange({ editor }) {
    const data = editor.getData();
    // console.log(data);
    this.editordata= data;
  }


}
