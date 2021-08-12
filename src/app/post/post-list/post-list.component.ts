import { Component, OnInit, Input } from '@angular/core';

import { Post } from "../post.model";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  panelOpenState = false;

  // posts = [
  //   {title: 'first post', content: 'this is the post\'s content...'},
  //   {title: 'second post', content: 'this is the sec post\'s content...'},
  //   {title: 'third post', content: 'this is the 3 post\'s content...'},
  // ]

  @Input() posts: Post[] = [];

  // constructor() { }

  // ngOnInit(): void {
  // }

}
