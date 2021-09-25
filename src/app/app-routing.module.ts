import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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

const routes: Routes = [
  {
    path:'signup/:lang',
    component:SignupComponent
  },
  {
    path:'login/:id',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'personalinformation',
    component:PersonalinformationComponent
  },
  {
    path:'contactdetail',
    component:ContactdetailComponent
  },
  {
    path:'socialmediadetail',
    component:SocialmediadetailComponent
  },
  {
    path:'aboutme',
    component:AboutmeComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'add-service',
    component:AddServiceComponent
  },
  {
    path:'edit-service/:id',
    component:EditServiceComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'add-product',
    component:AddProductComponent
  },
  {
    path:'edit-product/:id',
    component:EditProductComponent
  },
  {
    path:'testimonials',
    component:TestimonialsComponent
  },
  {
    path:'add-testimonials',
    component:AddTestimonialsComponent
  },
  {
    path:'edit-testimonials/:id',
    component:EditTestimonialsComponent
  },
  {
    path:'image-gallery',
    component:ImageGalleryComponent
  },
  {
    path:'add-image-gallery',
    component:AddImageGalleryComponent
  },
  {
    path:'edit-image-gallery/:id',
    component:EditImageGalleryComponent
  },
  {
    path:'edit-video-gallery/:id',
    component:EditVideoGalleryComponent
  },
  {
    path:'add-video-gallery',
    component:AddVideoGalleryComponent
  },
  {
    path:'video-gallery',
    component:VideoGalleryComponent
  },
  {
    path:'important-links',
    component:ImportantLinksComponent
  },
  {
    path:'add-important-links',
    component:AddImportantLinksComponent
  },
  {
    path:'edit-important-links/:id',
    component:EditImportantLinksComponent
  },
  {
    path:'bank-account',
    component:BankAccountComponent
  },
  {
    path:'upi-image',
    component:UpiImageComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
