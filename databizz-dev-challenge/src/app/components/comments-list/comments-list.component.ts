import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../shared/comments.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css'],
})
export class CommentsListComponent implements OnInit {
  comments: any;
  caja: any;
  constructor(public commentsService: CommentsService) {}

  ngOnInit() {
    this.commentsService.read_Comments().subscribe((data) => {
      this.comments = data.map((e) => {
        return {
          id: e.payload.doc.id,
          Author: e.payload.doc.data()['Author'],
          Message: e.payload.doc.data()['Message'],
        };
      });
      console.log('comments', this.comments);
    });
  }
}
