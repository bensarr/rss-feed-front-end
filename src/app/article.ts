export class Article {
  title: string;
  description: string;
  link: string;
  date: Date;
  media: any;

  constructor() {
    this.title = '';
    this.description = '';
    this.link = '';
    this.date = new Date();
    this.media = {};
  }
}
