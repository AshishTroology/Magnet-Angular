import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { LoginService } from '../useradmin/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { marker as TRANSLATE_ME } from '@biesbjerg/ngx-translate-extract-marker';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  socialUser: SocialUser = new SocialUser();
  routeSub: any;
  language: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private socialAuthService: SocialAuthService,
    private loginservice: LoginService,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('en');
    const browsing = this.translateService.getBrowserLang();
    console.log('Browser Language => ', browsing);
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      console.log(params); //log the entire params object
      this.translateService.use(params['id']);
      this.language=params['id'];
      localStorage.setItem('lang', params['id']);
      this.socialAuthService.authState.subscribe((user) => {
        // const lang = this.routeSub;
        this.socialUser = user;
        console.log(this.socialUser);
        let email = { email: this.socialUser.email };
        this.loginservice.getUserData(email,this.language).subscribe((data: any) => {
          if (data.length != 0) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('token', this.socialUser.authToken);
            localStorage.setItem('isLoggedIndata', JSON.stringify(data[0]));
            this.router.navigate(['/dashboard'], {
              state: { data: { data } },
            });
          } else {
            let data = JSON.stringify(this.socialUser);
            this.router.navigate(['/signup/' + params['id']], {
              state: { data: { data } },
            });
          }
        });
      });
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
