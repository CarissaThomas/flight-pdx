import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { PhotosService } from "../photos/photos.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})

export class PhotosComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  selectedPhotos: string[];

  constructor(private photosService: PhotosService) { }

  ngOnInit() {

    this.galleryOptions = [
      {
          width: "67%",
          height: "85vh",
          thumbnails: false,
          imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
          breakpoint: 800,
          width: "67%",
          height: "85vh",
      },
      // max-width 400
      {
          width: "67%",
          height: "85vh",
          breakpoint: 400,
      }
  ];
    this.setGalleryPhotos();
  }

  setGalleryPhotos() {
    var galleryImg = [];

    for (let index = 0; index < this.photosService.selectedPhotos.length; index++) {
      const photo = this.photosService.selectedPhotos[index];

      galleryImg.push(
        {
          small: photo,
          medium: photo,
          big: photo
        }
      )
      
    }
    this.galleryImages = galleryImg;
  }

}
