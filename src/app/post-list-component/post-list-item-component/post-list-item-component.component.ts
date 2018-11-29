import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/Post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() PostItem: Post;
    countlike: number = 0;
    countdislike: number  = 0;

  constructor(private postService: PostService) {}

  ngOnInit() {

  }
  getContent() {
    return this.PostItem.content;
  }
  getColor() {
    if (this.PostItem.loveIts > 0) {
      return 'green';
    } else if (this.PostItem.loveIts < 0) {
      return 'red';
    }
  }

  love() {
    this.PostItem.loveIts++;
    this.countlike++;
  }
  dlove() {
    this.PostItem.loveIts--;
    this.countdislike++;
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }

}
