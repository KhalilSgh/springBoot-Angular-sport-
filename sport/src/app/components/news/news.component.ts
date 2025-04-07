import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  T : any = [
    {name:"Ali", date :"02/03/2025", description:"lorem ipsum", image : "assets/images/bg_1.jpg", avatar : "assets/avatar/person_1.jpg"},
    {name:"Joseph", date :"02/12/2024", description:"lorem ipsum", image : "assets/images/joseph.png", avatar : "assets/avatar/joseph.png"},
    {name:"Mondher", date :"10/10/2023", description:"lorem ipsum", image : "assets/images/mondher.png", avatar : "assets/avatar/mondher.png"},
    {name:"Med", date :"02/01/2022", description:"lorem ipsum", image : "assets/images/med.png", avatar : "assets/avatar/med.png"}
  ];

}
