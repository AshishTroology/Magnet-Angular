import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      $('button').on('click', function () {
        $.getJSON('./assets/javascripts/languages.json', function (lang) {
          $.each(lang, function (key, value) {
            console.log(key);
            $('.list-unstyled').append(
              "<li><a href='/login/" +
                key +
                "'>" +
                value.nativeName +
                '</a></li>'
            );
          });
        });
      });
    });
  }


}
