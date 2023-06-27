import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Book } from '../models/book';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../shared/authentication-service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})

  export class BookListPage  implements OnInit {

  booksData: any;
  
    
  constructor(
    private router: Router,
    public apiService: ApiService,
    public authService: AuthenticationService,
  ) 
  
  {
    this.booksData = [];
  }

  ngOnInit() {
    if(!this.authService.isLoggedIn) {
      this.router.navigate(['login']);
    };
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

  delete(item: Book) {
    // Usunięcie książki z danych
    this.apiService.deleteItem(item.idBook).subscribe(response => {
      // Zaktualizowanie listy po pomyślnym usunięciu
      this.getAllBooks();
    });
  }
  
}

