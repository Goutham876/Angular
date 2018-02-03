import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import 'rxjs/add/observable/throw';

@Injectable()
export class PostService {
  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http : Http) { }

  getPosts() {
    return this.http.get(this.url).catch(this.handleError);
  }

  addPost(post) {
    return this.http.post(this.url,post)
    .catch(this.handleError);
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id,JSON.stringify({ isRead : true}))
    .catch(this.handleError);
  }

  deletePost(post) {
    return this.http.delete(this.url + '/' + post.id)
    .catch(this.handleError);
  }

  private handleError(error : Response) {
    if(error.status === 400)
        return Observable.throw(new BadInput(error.json()));

    if(error.status === 404)
        return Observable.throw(new NotFoundError())

      return Observable.throw(new AppError(error))
  }

}
