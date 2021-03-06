import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import {PostService} from '../post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})
export class PostDetailComponent implements OnInit {
  postId: string;
  postToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.postId = urlParameters['id'];
    });
    this.postToDisplay = this.postService.getPostById(this.postId);
  }
  beginDeletingPost(postToDelete){
    if(confirm("Are you sure you want to delete this post?")){
      console.log(postToDelete);
     this.postService.deletePost(this.postToDisplay);
   }
  }
}
