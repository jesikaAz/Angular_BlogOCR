import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponent } from './post-list-component/post-list-item-component/post-list-item-component.component';
import { HeaderComponent } from './header/header.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostService } from './services/post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponentComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', pathMatch: 'full', redirectTo: 'posts'},
  // { path: '**', redirectTo: 'posts' }
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponent,
    HeaderComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
