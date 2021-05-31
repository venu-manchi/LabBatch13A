
import { Component, OnInit } from '@angular/core';
import { BooksUrls } from 'src/app/enums/urls';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  myOrders: any=[];
  srcPath = 'https://bookcart.azurewebsites.net/Upload/';
  constructor(private commonservice:CommonService) { }

  ngOnInit(): void {
  }

  getMyOrders(){
    let url = BooksUrls.Myorders+ '/100';
    this.commonservice.commonGetHandler(url).subscribe( res => {
      console.log(res);
      this.myOrders= res;
    },
    err => {
      console.log(err);
    })

  }



}
