import { CommonService } from 'src/app/services/common.service';
import { Component, Input, OnInit } from '@angular/core';
import { BooksUrls } from 'src/app/enums/urls';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-addtowishlist',
  templateUrl: './addtowishlist.component.html',
  styleUrls: ['./addtowishlist.component.scss']
})
export class AddtowishlistComponent implements OnInit {
  toggle: boolean=true;
  buttonText: string | undefined;
  wishList: any=[];
  srcPath = 'https://bookcart.azurewebsites.net/Upload/';
  constructor(private commonservice :CommonService) { }


  @Input()
  bookId: number | undefined;



  @Input()
  showButton = false;



  ngOnInit(): void {


    this.getWishlist();


  }
  addedBooks(){

  }
  getWishlist(){
    let url = BooksUrls.wishList + '/100';
    this.commonservice.commonGetHandler(url).subscribe( res => {
      console.log(res);
      this.wishList= res;
    },
      (    err: any) => {
      console.log(err);
    })
  }



}
