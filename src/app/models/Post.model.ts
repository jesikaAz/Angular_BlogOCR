export class Post {
  public title: string;
  public content: string;
  public loveIts: number;
  public createdAt: Date;
//   Post: Post;

  constructor(title, content, loveIts, createdAt) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.createdAt = createdAt;
  }
}
