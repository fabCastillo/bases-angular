import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  public messages: any;

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.messages = this.dataService.getData();
      
    /* 
      Con subscribe
      .subscribe( data => console.log(data) ); 
    */
  }

  public escucharClick( event: number ) {
    console.log('Click en:', event);
  }

}
