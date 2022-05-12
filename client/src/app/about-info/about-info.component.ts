import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.css']
})
export class AboutInfoComponent implements OnInit {

  developer = {
    name: "Richard Antal Nagy",
    id: "V7BFDU",
    mail: "nagy.richard.antal@gmail.com"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
