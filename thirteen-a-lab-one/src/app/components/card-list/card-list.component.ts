import { Component, Input, OnInit } from '@angular/core';
import { BooksUrls } from 'src/app/enums/urls';
import { Book } from 'src/app/models/book';

import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {



  //book!: Book[];
  //result!:Book[];
  isActive!:boolean;

  //data =[];
  booksList: any = [];
  srcPath = 'https://bookcart.azurewebsites.net/Upload/';
  bookId: number | undefined;
  toggle!: boolean;
  buttonText!: string;

  @Input()
  showButton = false;
  constructor(private commonservice: CommonService ) { }

  ngOnInit(): void {

    // this. bookServices.getAllBooks()
    // .subscribe(data=>this.book=data);
    this.getBooks();

  }
  getAddToWishlist(id:any){
    let url = BooksUrls.wishList + '/100/' + id;
    this.commonservice.commonPostHandler(url,null).subscribe( res => {
      console.log(res);

    },
    err => {
      console.log(err);
    })
  }


  getBooks(){
    let url = BooksUrls.books;
    this.commonservice.commonGetHandler(url).subscribe( res => {
      console.log(res);
      this.booksList = res;
    },
    err => {
      console.log(err);
    })
  }


   setFavourite(bookData: Book[]) {
    const favBook = bookData.find(f => f.bookId === this.bookId);


   if (favBook) {
     this.toggle = true;
   } else {
     this.toggle = false;
   }
 }

  setButtonText() {
    if (this.toggle) {
      this.buttonText = 'Remove from Wishlist';
     } else {
       this.buttonText = 'Add to Wishlist';
     }
   }


   }

