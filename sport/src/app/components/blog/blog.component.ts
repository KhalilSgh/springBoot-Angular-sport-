import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blogTab : any = [
    {date : "01/02/2025", description : "lorem ipsum", image : "assets/images/bg_1.jpg", title : "TITLE ONE"},
    {date : "12/08/2025", description : "lorem ipsum", image : "assets/images/bg_2.jpg", title : "TITLE TWO"},
    {date : "10/03/2024", description : "lorem ipsum", image : "assets/images/bg_3.jpg", title : "TITLE THREE"}
  ];

}
