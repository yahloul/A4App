import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  photos:Photo[];

  constructor(private dataServices:DataService) { 
    console.log('photo constructor...')
  }

  ngOnInit() {
    console.log('gallery ngOnInit...');
      this.newFunction();
  }


    private newFunction() {
        this.dataServices.getPhotos().subscribe((photos) => {
        // console.log(photos);
        this.photos = photos;
    });
    }
}

interface Photo{
  albumId:number,
  id:number,
  title:string,
  url:string,
  thumbnailUrl:string
}
