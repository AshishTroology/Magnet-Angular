import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  baseUrl: 'http://localhost:3000' = 'http://localhost:3000';

  createUser(userData: any,lang:any) {
    const url = this.baseUrl + '/register/'+lang;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, userData, httpOptions);
  }

  getUserData(email: any,lang:any) {
    const url = this.baseUrl + '/checkemail/'+lang;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };
    return this.http.post(url, email, httpOptions);
  }

  getIndustry() {
    const url = this.baseUrl + '/industry';
    return this.http.get(url);
  }

  updateUser(userData: any, user_id: any) {
    const url = this.baseUrl + '/user/save_personal_detail/' + user_id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.patch(url, userData, httpOptions);
  }

  getUser_social_media(id: any) {
    const url = this.baseUrl + '/user/social_media_links/' + id;
    return this.http.get(url);
  }

  updateUser_social_media(userData: any, user_id: any) {
    const url = this.baseUrl + '/user/save_social_media_links/' + user_id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, userData, httpOptions);
  }

  updateUser_contact_detail(userData: any, user_id: any) {
    const url = this.baseUrl + '/user/save_contact_details/' + user_id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, userData, httpOptions);
  }

  updateUser_about_me(userData: any, user_id: any) {
    const url = this.baseUrl + '/user/save_about_me/' + user_id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, userData, httpOptions);
  }

  getcontactdetail(dataid: any) {
    const url = this.baseUrl + '/user/contact_details/'+dataid;
  
    return this.http.post(url, dataid);
  }

  getpincode_detail(dataid: any) {
    const url = this.baseUrl + '/ajax/pincode_detail/'+dataid;
  
    return this.http.post(url, dataid);
  }
/*-------------------------------------- Service Part---------------------*/
  AddUser_services(userData: any, user_id: any) {
    const url = this.baseUrl + '/user/save_service/' + user_id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, userData, httpOptions);
  }

  getservices(userid: any) {
    const url = this.baseUrl + '/user/services';
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, userid, httpOptions);
  }


  editservices(dataid: any) {
    const url = this.baseUrl + '/user/edit_service';
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, dataid, httpOptions);
  }

    Update_services(userData: any, user_id: any) {
    const url = this.baseUrl + '/user/update_service/' + user_id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, userData, httpOptions);
  }

    Delete_services(user_id: any) {
    const url = this.baseUrl + '/user/delete_services/' + user_id;
    return this.http.delete(url, user_id);
  }
/*--------------------------------------End Service Part---------------------*/


/*-------------------------------------- Product Part---------------------*/
AddUser_products(userData: any, user_id: any) {
  const url = this.baseUrl + '/user/save_product/' + user_id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userData, httpOptions);
}

getproducts(userid: any) {
  const url = this.baseUrl + '/user/products';
 const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userid, httpOptions);
}


editproduct(dataid: any) {
  const url = this.baseUrl + '/user/edit_product';
 const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, dataid, httpOptions);
}

  Update_product(userData: any, user_id: any) {
  const url = this.baseUrl + '/user/update_product/' + user_id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userData, httpOptions);
}

  Delete_product(user_id: any) {
  const url = this.baseUrl + '/user/delete_product/' + user_id;
  return this.http.delete(url, user_id);
}
/*--------------------------------------End Product Part---------------------*/

/*-------------------------------------- Testimonial Part---------------------*/
Add_testimonial(userData: any, user_id: any) {
    const url = this.baseUrl + '/user/save_testimonials/' + user_id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, userData, httpOptions);
  }


  gettestimonials(userid: any) {
    const url = this.baseUrl + '/user/testimonials';
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, userid, httpOptions);
  }

   edittestimonial(dataid: any) {
    const url = this.baseUrl + '/user/edit_testimonial';
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, dataid, httpOptions);
  }

    Update_testimonial(userData: any, user_id: any) {
    const url = this.baseUrl + '/user/update_testimonials/' + user_id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, userData, httpOptions);
  }

     Delete_testimonial(user_id: any) {
    const url = this.baseUrl + '/user/delete_testimonial/' + user_id;
    return this.http.delete(url, user_id);
  }
/*-------------------------------------- End Testimonial Part---------------------*/
/*-------------------------------------- Image Gallery Part---------------------*/
  getimage_gallery(userid: any) {
    const url = this.baseUrl + '/user/image_gallery';
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, userid, httpOptions);
  }


  Add_image_gallery(userData: any, user_id: any) {
    const url = this.baseUrl + '/user/save_image_gallery/' + user_id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, userData, httpOptions);
  }

editimage_gallery(dataid: any) {
    const url = this.baseUrl + '/user/edit_image_gallery';
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, dataid, httpOptions);
  }

 Update_image_gallery(userData: any, user_id: any) {
    const url = this.baseUrl + '/user/update_image_gallery/' + user_id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    return this.http.post(url, userData, httpOptions);
  }


   Delete_image_gallery(user_id: any) {
    const url = this.baseUrl + '/user/delete_image_gallery/' + user_id;
    return this.http.delete(url, user_id);
  }
/*--------------------------------------End Image Gallery Part---------------------*/

/*-------------------------------------- Video Gallery Part---------------------*/
getvideo_gallery(userid: any) {
  const url = this.baseUrl + '/user/video_gallery';
 const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userid, httpOptions);
}


Add_video_gallery(userData: any, user_id: any) {
  const url = this.baseUrl + '/user/save_video_gallery/' + user_id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userData, httpOptions);
}

editvideo_gallery(dataid: any) {
  const url = this.baseUrl + '/user/edit_video_gallery';
 const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, dataid, httpOptions);
}

Update_video_gallery(userData: any, user_id: any) {
  const url = this.baseUrl + '/user/update_video_gallery/' + user_id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userData, httpOptions);
}


 Delete_video_gallery(user_id: any) {
  const url = this.baseUrl + '/user/delete_video_gallery/' + user_id;
  return this.http.delete(url, user_id);
}
/*--------------------------------------End Video Gallery Part---------------------*/



/*-------------------------------------- Important Link Part---------------------*/
getimportant_link(userid: any) {
  const url = this.baseUrl + '/user/important_links';
 const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userid, httpOptions);
}


Add_important_link(userData: any, user_id: any) {
  const url = this.baseUrl + '/user/save_important_links/' + user_id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userData, httpOptions);
}

editimportant_link(dataid: any) {
  const url = this.baseUrl + '/user/edit_important_links';
 const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, dataid, httpOptions);
}

Update_important_link(userData: any, user_id: any) {
  const url = this.baseUrl + '/user/update_important_links/' + user_id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userData, httpOptions);
}


 Delete_important_link(user_id: any) {
  const url = this.baseUrl + '/user/delete_important_links/' + user_id;
  return this.http.delete(url, user_id);
}
/*--------------------------------------End Important Link Part---------------------*/



/*-------------------------------------- UPI Image Part---------------------*/
Add_upi_image(userData: any, user_id: any) {
  const url = this.baseUrl + '/user/save_upi_image/' + user_id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userData, httpOptions);
}

getupidetail(dataid: any) {
  const url = this.baseUrl + '/user/show_upi_details/'+dataid;

  return this.http.post(url, dataid);
}

/*--------------------------------------End UPI Image Part---------------------*/


/*-------------------------------------- Bank Account  Part---------------------*/
get_ifsc(ifsc_data: any) {
  const url = this.baseUrl + '/ajax/ifsc_detail/' + ifsc_data;
  return this.http.post(url, ifsc_data);
}
// get_ifsc(ifsc_data: any) {
//   const url = this.baseUrl + 'ajax/ifsc_detail/';
//  const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json; charset=UTF-8',
//     }),
//   };

//   return this.http.post(url, ifsc_data, httpOptions);
// }

Add_bank_account_detail(userData: any, user_id: any) {
  const url = this.baseUrl + '/user/save_bank_account_details/' + user_id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userData, httpOptions);
}


getbankdetail(dataid: any) {
  const url = this.baseUrl + '/user/show_bank_account_details/'+dataid;

  return this.http.post(url, dataid);
}


/*-------------------------------------- End Bank Account Part---------------------*/

/*-------------------------------------- Setting  Part---------------------*/
update_setting(userData: any, user_id: any) {
  console.log(userData)
  const url = this.baseUrl + '/ajax/setting/' + user_id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userData, httpOptions);
}

get_setting_detail(dataid: any) {
  const url = this.baseUrl + '/ajax/get_setting/'+dataid;

  return this.http.post(url, dataid);
}

/*--------------------------------------End Setting  Part---------------------*/


/*------------------------------------Status Update part---------------------*/
update_status_service(userData: any, user_id: any) {
  console.log(userData)
  const url = this.baseUrl + '/ajax/update_status_services/' + user_id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userData, httpOptions);
}

update_status_product(userData: any, user_id: any) {
  console.log(userData)
  const url = this.baseUrl + '/ajax/update_status_product/' + user_id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userData, httpOptions);
}

update_status_testimonial(userData: any, user_id: any) {
  console.log(userData)
  const url = this.baseUrl + '/ajax/update_status_testimonial/' + user_id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userData, httpOptions);
}

update_status_image_gallery(userData: any, user_id: any) {
  console.log(userData)
  const url = this.baseUrl + '/ajax/update_status_image_gallery/' + user_id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userData, httpOptions);
}

update_status_video_gallery(userData: any, user_id: any) {
  console.log(userData)
  const url = this.baseUrl + '/ajax/update_status_video_gallery/' + user_id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userData, httpOptions);
}

update_status_important_links(userData: any, user_id: any) {
  console.log(userData)
  const url = this.baseUrl + '/ajax/update_status_important_links/' + user_id;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  return this.http.post(url, userData, httpOptions);
}
/*------------------------------------End Status Update part---------------------*/
}
