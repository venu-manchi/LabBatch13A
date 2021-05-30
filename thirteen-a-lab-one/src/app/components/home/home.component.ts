import { Component, OnInit } from '@angular/core';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {


  hidden = false;
  num : number=0;



  constructor(


  ) { }


  ngOnInit() {

  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }


}
