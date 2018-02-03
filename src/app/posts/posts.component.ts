import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts : any [];
  

  constructor(private service : PostService) { 
    
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response.json(); 
        });
  }

  addTitle(input : HTMLInputElement) {
    let post = { title : input.value };
    input.value = '';
    this.service.addPost(post)
      .subscribe(
      response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      },
      (error : AppError) => {
        if(error instanceof BadInput) {
          // this.form.setErrors(error.json())  
        } else {
          throw error;
        }
      });
  }

  updateTitle(post) {
    this.service.updatePost(post)
    .subscribe(
      response => {
        console.log(response.json());
    });
  }

  deleteTitle(post) {
    this.service.deletePost(222)
    .subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
    },
      (error : AppError) => {
        if(error instanceof NotFoundError)
            alert("this post has already been deleated!")
          else {
            throw error;
          }
    });
  }

}
