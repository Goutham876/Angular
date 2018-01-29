import { Http } from '@angular/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts : any [];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http : Http) {
    http.get(this.url).subscribe(response => {
      this.posts = response.json();
      console.log(response.json());
    });
  }

  addTitle(input : HTMLInputElement) {
    let post = { title : input.value };
    input.value = '';    
    this.http.post(this.url,JSON.stringify(post)).subscribe(response => {
      post['id'] = response.json().id; 
      this.posts.splice(0, 0, post);
    })
  }

  updatePost(post) {
    let bodyPost = { isRead : true };
    this.http.put(this.url + '/' + post.id,bodyPost).subscribe(response => {
      console.log(response.json());
    })
  }
  deletePost(post) {
    this.http.delete(this.url + '/' + post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    })
  }
}
