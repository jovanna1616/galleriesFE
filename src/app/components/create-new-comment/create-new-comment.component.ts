import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Comment } from './../../shared/models/comment';

@Component({
  selector: 'app-create-new-comment',
  templateUrl: './create-new-comment.component.html',
  styleUrls: ['./create-new-comment.component.css']
})
export class CreateNewCommentComponent implements OnInit {
	@Output() onSubmit = new EventEmitter();
	private newComment: Comment = new Comment();
  constructor() { }

  ngOnInit() { }

  submitComment(comment: Comment) {
    this.onSubmit.emit(comment);
    this.newComment = new Comment();
  }

}
