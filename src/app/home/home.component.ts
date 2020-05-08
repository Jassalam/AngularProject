import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name : String ;
  constructor() { }

  ngOnInit(): void {
    console.log("Ng on init of home component");
    this.name = "Aman";
  }

}
