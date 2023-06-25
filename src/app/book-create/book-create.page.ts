import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.page.html',
  styleUrls: ['./book-create.page.scss'],
})
export class BookCreatePage implements OnInit {

  data: Book

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Book();
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['book-list']);   
    },
    error => {
      // Obsługa błędów
      console.error(error);
    });
  }

}