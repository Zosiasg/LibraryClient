
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.page.html',
  styleUrls: ['./book-edit.page.scss'],
})
export class BookEditPage implements OnInit {


  id!: BigInteger;
  data: Book;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Book();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.id, this.data).subscribe(response => {
      this.router.navigate(['book-list']);
    })
  }

}