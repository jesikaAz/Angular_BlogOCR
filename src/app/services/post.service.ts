import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostService {
  private posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'description',
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Mon deuxieme post',
      content: 'description',
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Encore un post',
      content: 'description',
      loveIts: 0,
      createdAt: new Date()
    }
  ];

  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePost() {

  }

  getPosts() {

  }
// ajout d'un post
  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }
// suppression d'un post
  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }
  // compteur de likes
  switchOnOne(i: number) {
    this.posts[i].loveIts++;
    this.emitPosts();

  }

  switchOffOne(i: number) {
    this.posts[i].loveIts--;
    this.emitPosts();

  }

}
