import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.scss']
})
export class BookDisplayComponent implements OnInit {
  private asin: string;
  private book: Book;

  @Input('asin')
  set setAsin(asin: string) {
    this.asin = asin;
    this.api.getBookInfos(asin).subscribe(book => this.book = book)
  }

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

}
