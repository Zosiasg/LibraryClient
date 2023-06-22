import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BookCreatePage } from './book-create.page';

describe('BookCreatePage', () => {
  let component: BookCreatePage;
  let fixture: ComponentFixture<BookCreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
