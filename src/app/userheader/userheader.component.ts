import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css'],
})
export class UserheaderComponent implements OnInit {
  isLoggedIn: any;
  isLoggedIndata: any;
  token:any;
  headerdata:any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    $(function () {
      var header = $('.mainHeader');
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
          header.removeClass('mainHeader').addClass('mobileHeader');
        } else {
          header.removeClass('mobileHeader').addClass('mainHeader');
        }
      });
    });

    this.isLoggedIn = localStorage.getItem('isLoggedIn');
    this.isLoggedIndata = localStorage.getItem('isLoggedIndata');
    this.token = localStorage.getItem('token');
    const logindata=JSON.parse(this.isLoggedIndata);
    console.log(logindata);
    this.headerdata=logindata;
    if (
      typeof this.isLoggedIn === 'undefined' ||
      this.isLoggedIn === null ||
      typeof this.token === 'undefined' ||
      this.token === null
    ) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
