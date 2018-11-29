import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.postForm = this.formBuilder.group( {
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const loveIts = 0;
    const createdAt = new Date();
    // redirection vers la page /post
    const newPost = new Post(title, content, loveIts, createdAt);
    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
