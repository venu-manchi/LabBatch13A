import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  gotowishlist(){

    this.router.navigate(['/addtowishlist']);

  }


}
