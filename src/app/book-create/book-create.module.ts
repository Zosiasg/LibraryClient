import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookCreatePageRoutingModule } from './book-create-routing.module';

import { BookCreatePage } from './book-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookCreatePageRoutingModule
  ],
  declarations: [BookCreatePage]
})
export class BookCreatePageModule {}
