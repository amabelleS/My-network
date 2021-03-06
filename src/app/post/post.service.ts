import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  private headers: HttpHeaders

  constructor(private http: HttpClient) {}

  getPosts() {
    // const headers = new HttpHeaders()
    //         .set("X-CustomHeader", "custom header value");

    this.http
      .get<{ message: string; posts: Post[] }>(
        "http://localhost:8080/api/posts"
      )
      .subscribe(postData => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {id: null, title: title, content: content};

    this.http.post<{message: string}>("http://localhost:8080/api/posts", post)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      })
  }
}
