import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() obj : any;
  constructor() { }

  ngOnInit(): void {
  }

  
scoreColor(a : number, b : number) : string{
  if(a > b) {
    return 'green'
  } else if ( a < b) {
    return 'red'
  } else {
    return 'blue'
  }
}

}