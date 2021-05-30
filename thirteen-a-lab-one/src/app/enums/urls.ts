import { environment } from "src/environments/environment";

let url = environment.baseUrl + '/api/';

export const BooksUrls = {
    books: url + 'Book',
    wishList:url+'Wishlist'
}
