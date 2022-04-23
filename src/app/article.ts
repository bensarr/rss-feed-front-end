export class Article {
  id: number;
  title: string;
  description: string;
  link: string;
  date: Date;
  media: any;

  constructor() {
    this.id = 0;
    this.title = '';
    this.description = '';
    this.link = '';
    this.date = new Date();
    this.media = {};
  }
}
