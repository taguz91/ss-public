import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  urlCloud: string = "https://api.cloudinary.com/v1_1/dk2igbyki/image/upload";
  URL_CLOUDINARY_PRESET: string = "ml_default";

  constructor( private _http: HttpClient ) { }


}
