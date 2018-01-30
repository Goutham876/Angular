import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : any[];
  constructor(private service : PostService) {
  }

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts = response.json();
    })
  }

  addTitle(input : HTMLInputElement) {
    let post = { title : input.value }
    input.value = '';
    this.service.addPosts(post).subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
    })
  }

  updateTitle(post) {
    this.service.updatePosts(post).subscribe(response => {
      console.log(response.json());
    })
  }

  deleteTitle(post) {
    this.service.deletePosts(post).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    })
  }

}
