import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../shared/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: any;
  commentAuthor: string;
  commentMessage: string;

  constructor(public commentsService: CommentsService) {}

  ngOnInit(): void {}
  CreateRecord() {
    let record = {};
    record['Author'] = this.commentAuthor;
    record['Message'] = this.commentMessage;
    record['Created_At'] = new Date();
    this.commentsService
      .create_NewComment(record)
      .then((resp) => {
        this.commentAuthor = '';
        this.commentMessage = '';
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onSubmit() {
    this.CreateRecord();
  }
}
