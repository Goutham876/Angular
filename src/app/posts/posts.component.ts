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
        }, 
        error => {
          alert('An unexpected error occured.');
          console.log(error);
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
      (error : Response) => {
        if(error.status === 400) {
          // this.form.setErrors(error.json())  
        } else {
          alert('An unexpected error occured.');
          console.log(error);
        }
      });
  }

  updateTitle(post) {
    this.service.updatePost(post)
    .subscribe(
      response => {
        console.log(response.json());
    },
      error => {
        alert('An unexpected error occured.');
        console.log(error);
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
            alert('An unexpected error occured.');
            console.log(error); 
          }
    });
  }

}
