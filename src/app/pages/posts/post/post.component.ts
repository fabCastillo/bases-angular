import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() public message: any;
  @Output() public clickPost = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() {
    this.clickPost.emit( this.message.id );
  }
}
