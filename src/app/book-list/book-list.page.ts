import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Book } from '../models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage  implements OnInit {

  booksData: any;

  constructor(
    private router: Router,
    public apiService: ApiService
  ) {
    this.booksData = [];
    
  }

  ngOnInit() {
   
  }

  ionViewWillEnter() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.booksData = response;
    })
  }

  // delete(item: any) {
  //   this.apiService.deleteItem(item.id).subscribe((response) => {
  //     this.getAllBooks();
  //   });
  // }

  delete(item:Book) {
    //Delete item in Books data
    this.apiService.deleteItem(item.idBook).subscribe(response => {
      //Update list after delete is successful
      this.getAllBooks();
      // this.router.navigate(['book-list']);
     });
  }

}