import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('Data services connected...');
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map(res => res.json());
  }
  getPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
    .map(res => res.json());
  }

}
