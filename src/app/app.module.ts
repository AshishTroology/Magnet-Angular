import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CKEditorModule } from 'ckeditor4-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UserfooterComponent } from './userfooter/userfooter.component';
import { PersonalinformationComponent } from './personalinformation/personalinformation.component';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';
import { SocialmediadetailComponent } from './socialmediadetail/socialmediadetail.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ServicesComponent } from './services/services.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AddTestimonialsComponent } from './add-testimonials/add-testimonials.component';
import { EditTestimonialsComponent } from './edit-testimonials/edit-testimonials.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { AddImageGalleryComponent } from './add-image-gallery/add-image-gallery.component';
import { EditImageGalleryComponent } from './edit-image-gallery/edit-image-gallery.component';
import { EditVideoGalleryComponent } from './edit-video-gallery/edit-video-gallery.component';
import { AddVideoGalleryComponent } from './add-video-gallery/add-video-gallery.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { ImportantLinksComponent } from './important-links/important-links.component';
import { AddImportantLinksComponent } from './add-important-links/add-important-links.component';
import { EditImportantLinksComponent } from './edit-important-links/edit-important-links.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { UpiImageComponent } from './upi-image/upi-image.component';
import { HomeComponent } from './home/home.component';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UserheaderComponent,
    UserfooterComponent,
    PersonalinformationComponent,
    ContactdetailComponent,
    SocialmediadetailComponent,
    AboutmeComponent,
    ServicesComponent,
    AddServiceComponent,
    EditServiceComponent,
    ProductsComponent,
    AddProductComponent,
    EditProductComponent,
    TestimonialsComponent,
    AddTestimonialsComponent,
    EditTestimonialsComponent,
    ImageGalleryComponent,
    AddImageGalleryComponent,
    EditImageGalleryComponent,
    EditVideoGalleryComponent,
    AddVideoGalleryComponent,
    VideoGalleryComponent,
    ImportantLinksComponent,
    AddImportantLinksComponent,
    EditImportantLinksComponent,
    BankAccountComponent,
    UpiImageComponent,
    HomeComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    CKEditorModule,
    SocialLoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
          new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
    ImageCropperModule,
    ToastrModule.forRoot({
      closeButton: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: 'toast-top-center',
      preventDuplicates: false,
      timeOut: 5000,
      extendedTimeOut: 1000,
    }),
    RouterModule.forRoot([
      {
        path: 'login/:id',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'personalinformation',
        component: PersonalinformationComponent,
      },
      {
        path: 'contactdetail',
        component: ContactdetailComponent,
      },
      {
        path: 'socialmediadetail',
        component: SocialmediadetailComponent,
      },
      {
        path: 'aboutme',
        component: AboutmeComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'add-service',
        component: AddServiceComponent,
      },
      {
        path: 'edit-service',
        component: EditServiceComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'add-product',
        component: AddProductComponent,
      },
      {
        path: 'edit-product',
        component: EditProductComponent,
      },
      {
        path: 'testimonials',
        component: TestimonialsComponent,
      },
      {
        path: 'add-testimonials',
        component: AddTestimonialsComponent,
      },
      {
        path: 'edit-testimonials',
        component: EditTestimonialsComponent,
      },
      {
        path: 'image-gallery',
        component: ImageGalleryComponent,
      },
      {
        path: 'add-image-gallery',
        component: AddImageGalleryComponent,
      },
      {
        path: 'edit-image-gallery',
        component: EditImageGalleryComponent,
      },
      {
        path: 'edit-video-gallery',
        component: EditVideoGalleryComponent,
      },
      {
        path: 'add-video-gallery',
        component: AddVideoGalleryComponent,
      },
      {
        path: 'video-gallery',
        component: VideoGalleryComponent,
      },
      {
        path: 'important-links',
        component: ImportantLinksComponent,
      },
      {
        path: 'add-important-links',
        component: AddImportantLinksComponent,
      },
      {
        path: 'edit-important-links',
        component: EditImportantLinksComponent,
      },
      {
        path: 'bank-account',
        component: BankAccountComponent,
      },
      {
        path: 'upi-image',
        component: UpiImageComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
    ]),
  ],

  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '977553366256-4thsl34a5356m57uprut887uir5cmfa9.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
