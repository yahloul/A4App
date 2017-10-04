import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  adress:adress;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;
  
  constructor(private dataService:DataService) { 
    console.log('contructor ..');
  }

  ngOnInit() {
    console.log('ngOnInit ..');
    this.name = 'Jhon Doe';
    this.email = 'test@test.com';
    this.age = 22;
    this.adress = {
      street: '50 hay zakrtouni',
      city:'Rabat',
      state:'MA'
    }
    this.hobbies = ['watch movie','write some code','training'];
    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    console.log('click ok ');
    this.name = 'Amine';
    this.hobbies.push('New hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0;i < this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  ToggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface adress{
  street:string,
  city:string,
  state:string
}

interface Post{
  id:number,
  title: string,
  body:string,
  userID:number
}